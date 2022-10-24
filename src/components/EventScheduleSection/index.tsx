import React, { FC } from "react";
import styled from "styled-components";
import { device } from "../../constants";
import { Container } from "../Container";
import { EventScheduleTable } from "../EventScheduleTable";
import { TabData, Tabs } from "../Tabs";

const Title = styled.p`
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 30px;
`

const StyledContainer = styled(Container)`
  padding: 0 10px;

  @media ${device.laptop} {
    padding: 0;
  }
`

const tabs: TabData[] = [
  {title: '1 Day', label: '16 Aug', content: <EventScheduleTable/>},
  {title: '2 Day', label: '17 Aug', content: <EventScheduleTable/>},
  {title: '3 Day', label: '18 Aug', content: <EventScheduleTable/>}
]

export const EventScheduleSection: FC = () => {
  return (
    <StyledContainer>
      <Title>Event Schedule</Title>
      <Tabs tabs={tabs}/>
    </StyledContainer>
  )
}