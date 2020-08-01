import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { HomeScreen } from '../views/homeScreen/HomeScreen';
import { Navbar } from '../components/navbar/Navbar';
import { Sidebar } from '../components/sidebar/Sidebar';
import { Footer } from '../components/footer/Footer';
import { ProductsScreen } from '../views/productsScreen/ProductsScreen';
import { UploadScreen } from '../views/uploadsScreen/UploadScreen';
import { CategoriesScreen } from '../views/categoriesScreen/CategoriesScreen';
import { ClasificationsScreen } from '../views/clasificationsScreen/ClasificationsScreen';
import { SubcategoriesScreen } from '../views/subcategoriesScreen/SubcategoriesScreen';
import { AdminResourcesScreen } from '../views/adminResourcesScreen/AdminResourcesScreen';

export const DashboardRouter = ({ location }) => {
  return (
    <div id='page-top'>
      <div id='wrapper'>
        <Sidebar />
        <div id='content-wrapper' className='d-flex flex-column'>
          <div id='content'>
            <Navbar />
            <div className='container-fluid'>
              <Switch>
                <Route exact path='/products' component={ProductsScreen} />
                <Route exact path='/categories' component={CategoriesScreen} />
                <Route
                  exact
                  path='/clasifications'
                  component={ClasificationsScreen}
                />
                <Route
                  exact
                  path='/subcategories'
                  component={SubcategoriesScreen}
                />
                <Route exact path='/uploads' component={UploadScreen} />
                <Route
                  exact
                  path='/resources'
                  component={AdminResourcesScreen}
                />
                <Route exact path='/' component={HomeScreen} />
                <Redirect exact to='/' />
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
