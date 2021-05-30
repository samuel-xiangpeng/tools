1. 创建promise构造函数
2. 创建executor(执行器函数)，这个函数接收<code>resolve</code>和<code>reject</code>两个函数作为参数。
3. 定义promise的状态<code>promsieState</code>，初始值是：pending，只有resolve和reject这两个函数才可以改变promiseState的值，也就是promsie的状态值。
4. <code>实现</code>resolve和reject函数.
5. <code>实现executor执行器异步函数任然可以该改变promise的状态值</code>
6. <code>.then</code>方法的实现
7. <code>.then</code>方法在executor异步函数的时候任然可以实现。
8. <code>.then</code>链式调用实现