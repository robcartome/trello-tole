import "./list.css";
import AddLine from 'remixicon-react/AddLineIcon';

function List({dataList}){
  return <li className="list">
            <div className="list__header">
              <h2  className="">{dataList.name}</h2>
            </div>
            <ul className="list__body">
              <li className="">Add Social nerworks..</li>
              <li className="">Add Social nerworks..</li>
              <li className="">Add Social nerworks..</li>
              <li className="">Add Social nerworks..</li>
            </ul>
            <div className="list__footer">
              <AddLine color="#AAACAF" /> Add new Card
            </div>
          </li>
}

export default List;