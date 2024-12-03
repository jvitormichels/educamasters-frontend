import { DataListItem, DataListRoot } from '../ui/data-list'

interface CourseInfo {
  id: number;
  name: string;
  total_size: number;
}

const DataList = ({ data }: { data: CourseInfo[] }) => {
  const formatNumber = (num: number) => {
    const rounded = Math.round(num * 10) / 10;
    return rounded.toFixed(1);
  };
  
  return (
    <DataListRoot orientation="horizontal">
      {data.map((course) => (
        <DataListItem key={course.id} label={course.name} value={`${Number(formatNumber(course.total_size))} MB`} />
      ))}
    </DataListRoot>
  );
};

export default DataList;