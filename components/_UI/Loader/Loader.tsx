import classes from './Loader.module.css';

export default function Loader() {
  const points = [1, 2, 3, 4];

  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        {points.map((point) => (
          <div
            data-testid="point"
            key={point}
            className={classes.point}
            style={{
              transform: `translateX(-${point}00%)`,
              animationDelay: `${points.length - point}00ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
}