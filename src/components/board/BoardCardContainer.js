import React, { useState } from "react";
import BoardCard from "./BoardCard";
import BoardCardEdit from "./BoardCardEdit";

export default function BoardCardContainer() {
  const [isEdit, setIsEdit] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleIsEdit = event => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(null);
    setIsEdit(true);
  };

  return (
    <>
      {isEdit ? (
        <BoardCardEdit setIsEdit={setIsEdit} />
      ) : (
        <BoardCard
          handleIsEdit={handleIsEdit}
          setAnchorEl={setAnchorEl}
          anchorEl={anchorEl}
        />
      )}
    </>
  );
}
