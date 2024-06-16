import { Chrono } from "react-chrono";

import classNames from 'classnames/bind';
import styles from './WorkingChrono.module.scss';

const cx = classNames.bind(styles);

const working_items = [
  {
    title: "January 2022",
    cardTitle: "Event 1",
    cardSubtitle: "Event 1 Subtitle",
    cardDetailedText: "This is the first event on the timeline.",
  },
  {
    title: "February 2022",
    cardTitle: "Event 2",
    cardSubtitle: "Event 2 Subtitle",
    cardDetailedText: "This is the second event on the timeline.",
  },
  {
    title: "March 2022",
    cardTitle: "Event 3",
    cardSubtitle: "Event 3 Subtitle",
    cardDetailedText: "This is the third event on the timeline.",
  }
];

const WorkingChrono = () => {
    return (
        <div className={cx('wrapper')}>
          <div className={cx('inner')}>
            <Chrono
              items={working_items}
              mode="VERTICAL_ALTERNATING"
              fontSizes={{
                cardSubtitle: '0.85rem',
                cardText: '0.8rem',
                cardTitle: '1rem',
                title: '1rem',
              }}
            />
          </div>

        </div>
    );
};

export default WorkingChrono;
