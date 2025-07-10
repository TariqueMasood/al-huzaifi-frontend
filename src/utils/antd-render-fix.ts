import { unstableSetRender } from 'antd';
import { createRoot, Root } from 'react-dom/client';

unstableSetRender((node, container) => {
  // Use a Symbol or WeakMap if preferred, but here's the simplest fix
  const key = '__antd_react_root__';

  let root: Root;

  if ((container as any)[key]) {
    root = (container as any)[key];
  } else {
    root = createRoot(container);
    (container as any)[key] = root;
  }

  root.render(node);

  return async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    root.unmount();
  };
});
