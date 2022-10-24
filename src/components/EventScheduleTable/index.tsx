import React, { FC } from "react";
import styled from "styled-components";
import { AvatarImage } from "../../assets/images";

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #E0E0E0;
  border-radius: 24px;
  margin-top: 40px;
  background-color: #FFF;
  overflow: auto;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 24px;
  overflow: hidden;
  min-width: 400px;

  thead {
    background: rgba(56, 29, 219, 0.05);
  }

  tr {
    border-bottom: 1px solid #E0E0E0;

    td {
      padding: 40px 0;
    }

    td:first-child {
      padding: 40px 0 40px 40px;
    }
  }

  tbody {
    tr:last-child {
      border-bottom: none;
    }
  }
`

const SpeakerWrapper = styled.div`
  display: flex;
`

const SpeakerAvatar = styled.img`
  width: 56px;
  height: 56px;
  margin-right: 10px;
`

const SpeakersInfo = styled.div`
  display: flex;
  flex-direction: column;

  &:first-child {
    font-weight: 700;
    font-size: 16px;
  }

  &:last-child {
    font-size: 16px;
    opacity: .5;

    span {
      font-weight: bold;
    }
  }
`

const Time = styled.p`
  font-size: 16px;
`

const Content = styled.p`
  font-weight: 700;
  font-size: 16px;
  max-width: 370px;
`

const HeadLabel = styled.p`
  font-weight: bold;
  font-size: 24px;
`

const SpeakersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const Speaker = (
  <SpeakerWrapper>
    <SpeakerAvatar src={AvatarImage} alt="avatar" />
    <SpeakersInfo>
      <p>John Dou</p>
      <p>Booth: <span>2F12</span></p>
    </SpeakersInfo>
  </SpeakerWrapper>
)

const tableContent = [
  {
    id: 1,
    time: <Time>11:00 AM to 12:00 PM</Time>,
    content: <Content>Vestibulum vel eros vel metus lacinia feugiat a nec metus.</Content>,
    speakers: Speaker
  },
  {
    id: 2,
    time: <Time>12:00 PM to 03:00 PM</Time>,
    content: <Content>Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna. Vestibulum ornare eget urna nec pulvinar. Praesent porttitor convallis blandit. Fusce vel egestas dolor. Donec eu augue enim. Donec rutrum non lacus ac rhoncus. Morbi quis luctus leo, nec cursus ex.</Content>,
    speakers: (
      <SpeakersWrapper>
        {Speaker}
        {Speaker}
        {Speaker}
      </SpeakersWrapper>
    )
  },
  {
    id: 3,
    time: <Time>03:00 PM to 04:00 PM</Time>,
    content: <Content>Vestibulum vel eros vel metus lacinia feugiat a nec metus.</Content>,
    speakers: (
      <SpeakersWrapper>
        {Speaker}
        {Speaker}
      </SpeakersWrapper>
    )
  },
]

export const EventScheduleTable: FC = () => {
  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            <td>
              <HeadLabel>Time</HeadLabel>
            </td>
            <td>
              <HeadLabel>Content</HeadLabel>
            </td>
            <td>
              <HeadLabel>Speakers</HeadLabel>
            </td>
          </tr>
        </thead>
        <tbody>
          {tableContent.map(content => (
            <tr key={content.id}>
              <td>{content.time}</td>
              <td>{content.content}</td>
              <td>{content.speakers}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  )
}