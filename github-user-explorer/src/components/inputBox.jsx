import { useRef } from "react";
const InputBox = ({ onSearch }) => {
  const userNameRef = useRef();
  const handleOnSearch = () => {
    const userName = userNameRef.current.value;
    onSearch(userName);
  };

  return (
    <>
      <div class="input-group mb-3 input-container">
        <span class="input-group-text">@</span>
        <div class="form-floating">
          <input
            type="text"
            ref={userNameRef}
            class="form-control"
            id="floatingInputGroup1"
            placeholder=" Enter Username Here"
          />
          <label for="floatingInputGroup1">Username</label>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-primary search-button"
        onClick={handleOnSearch}
      >
        Search
      </button>
    </>
  );
};
export default InputBox;
