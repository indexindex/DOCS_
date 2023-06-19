// TODO: React Router "npm i react-router-dom"

// * index.jsx configuration
import { BrowserRouter } from 'react-router-dom';

// ? <BrowserRouter> uses HTML5 history API to keep your UI in sync with the URL. It wraps your application and provides the necessary routing functionality.

// * ...
<BrowserRouter>
    <App/>
</BrowserRouter>
// * ...



// * App.jsx
import { Routes, Route } from 'react-router-dom';

// ? <Route> components, which define the routes for the home page (/) and the about page (/about). When the URL matches a defined route, the corresponding component is rendered.

// * ...
<Routes>
    <Route path='/' element={<NavBar/>}>
        <Route index element={<Home/>}/>
        <Route index element={<Page1/>}/>
        <Route index element={<Page2/>}/>
    </Route>
</Routes>
// * ...

// * we usually make routes folder in src and there will be folders for pages or page layout
