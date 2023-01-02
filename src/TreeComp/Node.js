import { useRef, useEffect, useState } from 'react';
import { NodeElem } from './styles';

function NodeComp({ data, root, onDropChange }) {
  const nodeRef = useRef(null);
  const hasChild = data.child?.length > 0;
  const [drag, setDrag] = useState(false);
  let dataCls = 'node-data';
  if (hasChild) {
    dataCls += ' down-arr';
  }
  if (root) {
    dataCls += ' no-top';
  }
  if (drag) {
    dataCls += ' on-drag';
  }
  useEffect(() => {
    const onDragstart = (evnt) => {
      evnt.dataTransfer.setData('id', evnt.target.dataset.id);
      setDrag(true);
    };
    const onDragend = () => {
      setDrag(false);
    };
    const onDragover = (evnt) => {
      evnt.preventDefault();
    };
    const onDrop = (evnt) => {
      //   console.log(
      //     'id-->',
      //     evnt.dataTransfer.getData('id'),
      //     data.id,
      //     evnt.target
      //   );
      //   debugger;
      let source = evnt.dataTransfer.getData('id');
      source = parseInt(source);
      let target = evnt.target.dataset.id;
      target = parseInt(target);
      // console.log('source-->>', source);
      if (target !== source) {
        console.log('source-->', source, 'target-->', data.id);
        onDropChange(source, target);
      }
    };
    if (nodeRef.current) {
      nodeRef.current.addEventListener('dragstart', onDragstart);
      nodeRef.current.addEventListener('dragend', onDragend);
      nodeRef.current.addEventListener('dragover', onDragover);
      nodeRef.current.addEventListener('drop', onDrop);
    }
    return () => {
      if (nodeRef.current) {
        nodeRef.current.removeEventListener('dragstart', onDragstart);
        nodeRef.current.removeEventListener('dragend', onDragend);
        nodeRef.current.removeEventListener('dragover', onDragover);
        nodeRef.current.removeEventListener('drop', onDrop);
      }
    };
  }, []);
  return (
    <NodeElem
      //   ondragstart={(event) => {
      //     console.log('drag start');
      //     event.dataTransfer.setData('text/plain', 'data1');
      //     setDrag(true);
      //   }}
      //   ondragover={(event) => {
      //     const isLink = event.dataTransfer.types.includes('text/plain');
      //     if (isLink) {
      //       event.preventDefault();
      //       console.log('---ygvhbjn');
      //     }
      //   }}
      data-id={data.id}
      className={dataCls}
      ref={nodeRef}
      draggable={!root}
    >
      {data.id}
    </NodeElem>
  );
}

export default NodeComp;
