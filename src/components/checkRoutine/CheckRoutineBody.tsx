import SelectBox from "@/common/select/SelectBox";
import styled from "styled-components";
import { RecordType } from "@/types/RecordType";

type Props = {
  count: number;
  record: RecordType[];
  handleChangeSelect: (value: number) => void;
};

export default function CheckRoutineBody({
  count,
  record,
  handleChangeSelect,
}: Props) {
  return (
    <CheckBodyStyled>
      <SelectWrapper>
        <label>조회할 루틴 일정을 설정해주세요.</label>
        <SelectBox
          width="100%"
          title="3"
          values={["3", "5", "7", "10"]}
          handleChangeSelect={(value) => handleChangeSelect(Number(value))}
        />
      </SelectWrapper>
      <BodyHeader>최근 {count}일간 루틴</BodyHeader>
      <ListWrapper>
        {record?.map((item) => {
          return <ListStyled key={item._id}>{item.title}</ListStyled>;
        })}
      </ListWrapper>
    </CheckBodyStyled>
  );
}

const CheckBodyStyled = styled.article`
  flex-grow: 1;
  padding: 16px;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-weight: bold;
  }
`;

const BodyHeader = styled.header`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin: 50px 0px 20px 0px;
`;

const ListWrapper = styled.ul`
  width: 100%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ListStyled = styled.li`
  width: 100%;
  padding: 16px 0px;
  font-weight: bold;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
