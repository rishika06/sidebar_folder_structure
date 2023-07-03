import React, { useState } from "react";

function Folder({ folderData, handleInsertNode }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(folderData.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (folderData.isFolder) {
    return (
      <div style={{ textAlign: "left", marginLeft: "20px" }}>
        <div
          //   className={styles.folder}
          style={{
            marginTop: "10px",
            width: "300px",
            backgroundColor: "#d0d0d0",
            padding: "6px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
          }}
          onClick={() => setExpand(!expand)}
        >
          <span> 📂{folderData.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button
              onClick={(e) => handleNewFolder(e, false)}
              style={{ marginLeft: "6px" }}
            >
              File +
            </button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none" }}>
          {showInput.visible && (
            <div>
              <span> {showInput.isFolder ? "📂" : "🗄"}</span>
              <input
                type="text"
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                onKeyDown={onAddFolder}
              />
            </div>
          )}

          {folderData.items.map((item) => (
            <Folder folderData={item} handleInsertNode={handleInsertNode} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ textAlign: "left", marginLeft: "20px" }}>
        🗄 {folderData.name}
      </div>
    );
  }
}

export default Folder;
