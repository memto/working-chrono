import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layouts';
import { Fragment } from 'react';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, idx) => {
                        let Layout = DefaultLayout;

                        if (route.layout === null) {
                            Layout = Fragment;
                        } else if (route.layout) {
                            Layout = route.layout;
                        }

                        const PageElement = (
                            <Layout>
                                <route.component />
                            </Layout>
                        );

                        return <Route key={idx} path={route.path} element={PageElement} />;
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
