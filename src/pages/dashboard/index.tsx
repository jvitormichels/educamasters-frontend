import { Box, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { fetchExpiredAndActiveStorage, fetchTopCourses } from '../../services/dashboardService';
import Stat from '../../components/stats/Stat';
import { ActiveAndExpiredStorage, CourseInfo, TopCourseList } from '@/types/dashboard';
import DataList from '../../components/data-list/DataList';
import { Separator } from "@chakra-ui/react"

function Dashboard() {
  const [expiredStorage, setExpiredStorage] = useState<number>(0);
  const [activeStorage, setActiveStorage] = useState<number>(0);
  const [topCourses, setTopCourses] = useState<CourseInfo[]>([]);
  const [totalStorage, setTotalStorage] = useState<number>(0);
  
  useEffect(() => {
    fetchExpiredAndActiveStorage().then((data: ActiveAndExpiredStorage) => {
      setExpiredStorage(Number(formatNumber(data.expired_course_storage)));
      setActiveStorage(Number(formatNumber(data.active_course_storage)));
      setTotalStorage(Number(formatNumber(data.active_course_storage + data.expired_course_storage)));
    });

    fetchTopCourses().then((data: TopCourseList) => {
      console.log(data.courses)
      setTopCourses(data.courses);
    });

    console.log(expiredStorage)
  }, []);

  const formatNumber = (num: number) => {
    const rounded = Math.round(num * 10) / 10;
    return rounded.toFixed(1);
  };

  return (
    <Box className="App-header">
      <Box display={{ base: "block", md: "block" }} flexBasis={{ base: "100%", md: "auto" }} padding="12">
        <Stack
          gap={20}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <Stat label="Armazenamento total" value={`${totalStorage}MB`} />
          <Stat label="Cursos ativos" value={`${activeStorage}MB (${Number(formatNumber((activeStorage/totalStorage)*100))}%)`} />
          <Stat label="Cursos expirados" value={`${expiredStorage}MB (${Number(formatNumber((expiredStorage/totalStorage)*100))}%)`} />
        </Stack>
      </Box>
      <Separator size="md" />
      <Box padding="12">
        <h5>Cursos com maior gasto de armazenamento</h5>
        <DataList data={topCourses} />
      </Box>
    </Box>
  );
}

export default Dashboard;