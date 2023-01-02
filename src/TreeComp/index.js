import { Node, ChildWrapper } from './styles';
import NodeComp from './Node';

function Tree({ data, root, onDropChange }) {
  const hasChild = data.child?.length > 0;
  const notMorethan1 = data.child?.length <= 1;
  return (
    <Node>
      <NodeComp data={data} root={root} onDropChange={onDropChange} />
      {hasChild && (
        <ChildWrapper className={notMorethan1 ? 'not-more-one' : ''}>
          {data.child.map((chl, index) => (
            <Tree
              // key={'child-' + index}
              data={chl}
              onDropChange={onDropChange}
            />
          ))}
        </ChildWrapper>
      )}
    </Node>
  );
}

export default Tree;
