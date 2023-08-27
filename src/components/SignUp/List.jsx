import classes from "./List.module.scss";

function List() {
  return (
    <>
      <ul className={classes.list}>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>
    </>
  );
}

export default List;
