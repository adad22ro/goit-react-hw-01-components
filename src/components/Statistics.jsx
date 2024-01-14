import style from './css/statistics.module.css';
import generateRandomColor from './ass/generateColor';

const statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>

      <ul className={style.statList}>
        {stats.map(item => {
          const color = generateRandomColor(item.percentage);
          return (
            <li
              className={`${style.item}`}
              key={item.id}
              style={{ backgroundColor: color }}
            >
              <span className={style.label}>{item.label} </span>
              <span className={style.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default statistics;
