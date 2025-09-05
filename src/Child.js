import React, { forwardRef, useImperativeHandle, useState } from "react";

const Child = (props, ref) => {
  const [openModel, setOpenModel] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    openModel: (value) => setOpenModel(value),
  }));

  if (!openModel) return null;

  return (
    <div>
      <h2>This is Child</h2>
      <button onClick={() => setOpenModel(false)}>Close Model</button>
    </div>
  );
};

export default forwardRef(Child);
