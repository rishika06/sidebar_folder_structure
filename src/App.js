import { useState } from "react";
import data from "./data/folderData.json";

import "./App.css";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/useTraverseTree";

function App() {
  const [folderData, setFolderData] = useState(data);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(folderData, folderId, item, isFolder);
    return setFolderData(finalTree);
  };

  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} folderData={folderData} />
    </div>
  );
}

export default App;
