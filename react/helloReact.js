// 创建、嵌套组件
// 添加标签样式
// 显示数据
// 渲染条件列表
// 对事件做出响应
// 组件间数据共享

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
// react的组件必须是大写 html标签必须是小写
function MyButton(){
  return(
    <>
    <button onClick>hello react</button>
    </>
  )
}
let content;
if(user.name){
  content = <AdminPanel/>
}else{
  content = <LoginPanel/>
}
function MyApp(){
  return(
    <>
    <h1>welcome to my app</h1>
    <MyButton/>
    <p className = 'myP'>this is a p tag
     <span>{user.name}</span>
    </p>
     <div>
      {content}
      <img src = {user.imageUrl} 
           style = {{width:user.imageSize,height:user.imageSize}}/>
     </div>
     <ul>
       {products.map(item=><li key={item.id}>{item.title}</li>)}
     </ul>
    </>
  )
}
// 对于哪些需要更新多个状态的组件来说 过于分散的事件处理程序
// Reducer 合并组件的状态更新逻辑
// Context 为组件透传属性