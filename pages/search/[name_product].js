import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import { CardProduct, CardCoupon } from '../../components/molecules';
import Link from 'next/link';
import { Button } from '../../components/atoms';
import { Breakpoints } from '../../utils';
import axios from '../../configs/api/backendApi';
import { privateRoute } from '../../configs/routes/privateRoute';

function Index({ initialData }) {
  const list = [
    { id: 1, name: 'Favorite & Promo' },
    { id: 2, name: 'Coffe' },
    { id: 3, name: 'Non Coffe' },
    { id: 4, name: 'Foods' },
    { id: 5, name: 'Add-on' },
  ];
  const resData = initialData.result;
  const resPagination = initialData.pagination;
  const [data, setData] = React.useState(resData);
  const [pagination, setPagination] = React.useState(resPagination);
  const [istrue, setIsTrue] = React.useState(false);
  const [category, setCategory] = React.useState(1);
  const [defaultPage, setDefaultPage] = React.useState(1);
  const [page, setPage] = React.useState(defaultPage + 1);
  const [sort, setSort] = React.useState('');
  const seeMore = async () => {
    console.log(resPagination);
    const { data: dataNew } = await axios(`products/?searchBy=products.name_product&npp=4&page=${page}&${sort}`);
    const newData = dataNew.data.result;
    const newPagination = dataNew.data.pagination;
    setPagination(newPagination);
    setData([...data, ...newData]);
    setPage(page + 1);
  };

  const handleSort = async (e) => {
    setSort(e.target.value);
    const { data: bySort } = await axios(
      `products/?searchBy=products.name_product&npp=4&page=${defaultPage}&${e.target.value}`
    );
    const newData = bySort.data.result;
    setData(newData);
  };
  return (
    <>
      <Layout isAuth={true} active="product" login={true}>
        <Style>
          <AllProduct>
            <StyleSearch>
              <div className="search">
                <p>Search</p>
              </div>
              <div>
                <select onChange={(e) => handleSort(e)} className="sort">
                  <option selected disabled hidden>
                    Urutkan berdasar
                  </option>
                  <option value="field=id_product&sort=desc">New Product</option>
                  <option value="field=price&sort=asc">Cheapest</option>
                  <option value="field=price&sort=desc">Most Expensive</option>
                </select>
              </div>
            </StyleSearch>
            {data.length ? (
              <ProductWrapper>
                {data?.map((item) => {
                  return (
                    <CardProduct
                      href={`product-detail/${item.id_product}`}
                      key={item.id_product}
                      image={item.image_product}
                      name={item.name_product}
                      price={item.price}
                    />
                  );
                })}
              </ProductWrapper>
            ) : (
              <p className="no-available">No products available</p>
            )}

            {pagination.current < pagination.totalPages ? (
              <div>
                <Button className="button grey see-more" onClick={seeMore}>
                  See More
                </Button>
                <p className="fs-17 fc-brown">*the price has been cutted by discount appears</p>
              </div>
            ) : (
              ''
            )}
          </AllProduct>
        </Style>
      </Layout>
    </>
  );
}

const Style = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  border-top: 0.5px solid #9f9f9f;
  flex-wrap: wrap;
  ${Breakpoints.lessThan('md')`
    flex-direction: column;
  `}
`;
const AllProduct = styled.div`
  flex: 2;
  box-sizing: border-box;
  padding: 0 8px 29px 8px;

  ${Breakpoints.greaterThan('sm')`
    padding: 0 15px 29px 15px;
  `}
  ${Breakpoints.greaterThan('lg')`
    padding: 0 35px 29px 35px;
  `}
  ${Breakpoints.greaterThan('xlg')`
    padding: 0 50px 29px 50px;
  `}
  ${Breakpoints.greaterThan('1339px')`
    padding: 0 157px 29px 115px;
  `}
  .no-available {
    text-align: center;
    margin-top: 25vh;
    margin-bottom: 25vh;
  }

  .see-more {
    margin-top: 4rem;
    margin-left: 25%;
    margin-right: 25%;
    height: 46px;
    width: 50%;
    margin-bottom: 2rem;
  }
`;

const StyleSearch = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 29px 0;
  border-radius: 30px;
  .search {
    p {
      margin: 0;
      font-size: 50px;
      font-weight: 400;
      color: #9f9f9f;
      padding: 0 1rem 0.9rem 1rem;
    }
  }
  .sort {
    cursor: pointer;
    font-size: 18px;
    border: transparent;
    padding: 1rem 1.5rem;
    outline: none;
  }
`;
const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  margin-bottom: 3rem;
  ${Breakpoints.lessThan('xsm')`
    grid-template-columns: repeat(1, 1fr);
    column-gap: 10px;
    row-gap: 10px;
  `}
  ${Breakpoints.greaterThan('md')`
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    row-gap: 35px;
  `}
  ${Breakpoints.greaterThan('xlg')`
    grid-template-columns: repeat(4, 1fr);
    column-gap: 35px;
    row-gap: 35px;
  `}
`;
export default Index;

export const getServerSideProps = privateRoute(async (ctx) => {
  const name_product = ctx?.params?.name_product || '';
  const { data } = await axios(
    `products/?searchBy=products.name_product&search=${name_product}&npp=4&field=id_product&sort=desc`
  );
  const initialData = data.data;
  return {
    props: { initialData }, // will be passed to the page component as props
  };
});
