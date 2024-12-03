import { StatLabel, StatRoot, StatValueText } from '../ui/stat';

interface StatProps {
  label: string;
  value: string;
}

const Stat: React.FC<StatProps> = ({ label, value }) => {
  return (
    <StatRoot>
      <StatLabel>{ label }</StatLabel>
      <StatValueText justifyContent={"center"}>{ value }</StatValueText>
    </StatRoot>
  )
}

export default Stat;