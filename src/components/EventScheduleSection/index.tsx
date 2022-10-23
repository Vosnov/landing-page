import React, { FC } from "react";
import styled from "styled-components";
import { Container } from "../Container";
import { EventScheduleTable } from "../EventScheduleTable";
import { TabData, Tabs } from "../Tabs";

const Title = styled.p`
  font-size: 34px;
  font-weight: bold;
  margin-top: 160px;
  margin-bottom: 60px;
`

const tabs: TabData[] = [
  {title: '1 Day', label: '16 Aug', content: <EventScheduleTable/>},
  {title: '2 Day', label: '17 Aug', content: <EventScheduleTable/>},
  {title: '3 Day', label: '18 Aug', content: <EventScheduleTable/>}
]

export const EventScheduleSection: FC = () => {
  return (
    <Container>
      <Title>Event Schedule</Title>
      <Tabs tabs={tabs}/>
    </Container>
  )
}