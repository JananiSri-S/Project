import { userContext } from "./Parent";

export default function Child() {
  return (
    <>
      <userContext.Consumer>
        {value => <p>{value}</p>}
      </userContext.Consumer>
    </>
  );
}