interface IPersonalInfoProps {
  age: number;
  gender: string;
}
const PersonalInfo = ({ age, gender }: IPersonalInfoProps) => (
  <div>
    <span>{age}</span>
    <span>{gender}</span>
  </div>
);

export default PersonalInfo;
