import styles from "./inputSearch.module.css"

const InputSearch = () => {
  return (
    <>
      <input type="text" name="text" placeholder="Search..." className={styles.input} />
    </>
  );
}

export default InputSearch;