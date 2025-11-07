import { useRoutes } from "react-router-dom";
import { ProdsApp } from "../ProdsApp";
import { ProductComponent } from "../prodComponents";
import { CarritoApp } from "../CarritoApp";
import { App } from "../App";

export const AppRoutes = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <App />
        },
        {
            path: '/productos',
            element: <ProdsApp />
        },
        {
            path: '/product-component',
            element: <ProductComponent />
        },
        {
            path: '/carrito',
            element: <CarritoApp />
        },
        {
            path: '*',
            element: <div className="container mt-4 text-center">Página no encontrada</div>
        }
    ]);

    return routes;
}