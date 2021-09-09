import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout';
import { CardProduct, CardCoupon } from '../../components/molecules';
import Link from 'next/link';
import { Button } from '../../components/atoms';
import { Breakpoints } from '../../utils';
import { privateRoute } from '../../configs/routes/privateRoute';
import axios from '../../configs/api/backendApi';
import cookies from 'next-cookies';
function Index({ initialData, role }) {
  console.log(role, 'ini role');
  const list = [
    { id: 1, name: 'Favorite & Promo' },
    { id: 2, name: 'Coffee' },
    { id: 3, name: 'Non Coffee' },
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
  const seeMore = async () => {
    console.log(resPagination);
    const { data: dataNew } = await axios(
      `products/?searchBy=products.category_id&npp=4&page=${page}&search=${category}`
    );
    const newData = dataNew.data.result;
    const newPagination = dataNew.data.pagination;
    setPagination(newPagination);
    setData([...data, ...newData]);
    setPage(page + 1);
  };

  const handleCategory = async (params) => {
    setCategory(params);
    const { data: byCategory } = await axios(
      `products/?searchBy=products.category_id&npp=4&page=${defaultPage}&search=${params}`
    );
    const newData = byCategory.data.result;
    const newPagination = byCategory.data.pagination;
    setPagination(newPagination);
    setData(newData);
    setPage(defaultPage + 1);
  };

  const [editProduct, setEditProduct] = React.useState(null);
  return (
    <>
      <Layout isAuth={true} active="product" login={true} title="Product">
        <Style>
          <Coupun>
            <div className="coupons">
              <div className="coupons-header">
                <p className="tittle">Promo Today</p>
                <p className="sub-tittle">Coupons will be updated every weeks. Check them out! </p>
              </div>
              <div className="coupons-content">
                <div className="coupons-item">
                  <p>No coupons available</p>
                </div>
              </div>
            </div>
            <Button className="apply-coupon button" disabled={true} color="choco">
              Apply Coupun
            </Button>
            <div className="terms-condition">
              <p className="title">Terms and Condition </p>
              <p className="info">1. You can only apply 1 coupon per day</p>
              <p className="info">2. It only for dine in</p>
              <p className="info">3. Buy 1 get 1 only for new user </p>
              <p className="info">4. Should make member card to apply coupon</p>
            </div>
          </Coupun>
          <AllProduct>
            <ToggleCategory>
              {list.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className={`category ${category == item.id ? 'active' : ''}`}
                    onClick={() => handleCategory(item.id)}
                  >
                    <p>{item.name}</p>
                    {category == item.id && <div className="active-border"></div>}
                  </div>
                );
              })}
            </ToggleCategory>
            {data.length ? (
              <ProductWrapper>
                {data?.map((item) => {
                  if (role != 'admin') {
                    return (
                      <CardProduct
                        href={`product-detail/${item.id_product}`}
                        key={item.id_product}
                        image={item.image_product}
                        name={item.name_product}
                        price={item.price}
                      />
                    );
                  } else {
                    return (
                      // <div>
                      <>
                        <CardProduct
                          role="admin"
                          href={`product-detail/${item.id_product}`}
                          key={item.id_product}
                          image={item.image_product}
                          name={item.name_product}
                          price={item.price}
                          onClick={() => setEditProduct(item.id_product)}
                        />
                      </>
                    );
                  }
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
            {role == 'admin' && (
              <div className="action-admin">
                {/* <Link href={`/edit-product/${editProduct}`}>
                  <a>Edit product</a>
                </Link> */}
                <Link href="/add-product">
                  <a>Add new product</a>
                </Link>
              </div>
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
  ${Breakpoints.between('576px', 'lg')`
  margin-top: 232px;
`}
  border-top: 0.5px solid #9f9f9f;
  flex-wrap: wrap;
  ${Breakpoints.lessThan('md')`
    flex-direction: column;
  `}
`;

const Coupun = styled.div`
  padding: 29px 8px 29px 8px;
  min-height: calc(100vh - 160px);
  ${Breakpoints.greaterThan('sm')`
    padding: 29px 15px 29px 15px;
  `}
  ${Breakpoints.greaterThan('lg')`
    padding: 29px 15px 29px 15px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  `}
  ${Breakpoints.greaterThan('xlg')`
    padding: 29px 50px 29px 50px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  `}
 /* ${Breakpoints.greaterThan('1339px')`
 padding: 0 157px 29px 115px;
 `} */
  height: 100%;
  .coupons {
    display: flex;
    height: calc(100vh-156px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-header {
      ${Breakpoints.lessThan('xlg')`
        width: 60%;
      `}
      .tittle {
        font-weight: 700;
        font-size: 25px;
        color: #6a4029;
      }
      .subtittle {
        font-weight: 400;
        font-size: 12px;
        color: #000000;
      }
      padding: 0;
      p {
        text-align: center;
        margin-top: 0;
      }
    }
    &-content {
      margin-top: 3rem;
      scroll-behavior: smooth;
      overflow-y: auto;
      flex: 1;
    }
  }
  .button {
    height: 64px;
    font-size: 17px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 84px;
  }
  .terms-condition {
    font-size: 12px;
    color: #4f5665;
    .title {
      font-weight: 700;
    }
    .info {
      font-weight: 400;
    }
  }
  flex: 1;
`;
const AllProduct = styled.div`
  flex: 2;
  box-sizing: border-box;
  border-left: 0.5px solid #9f9f9f;
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
  .action-admin {
    display: flex;
    flex-direction: column;
    a {
      margin-top: 1rem;
      color: #6a4029;
    }
    font-size: 25px;
    font-weight: 700;
    text-decoration-line: underline;
  }
`;

const ToggleCategory = styled.div`
  display: flex;
  ${Breakpoints.greaterThan('968px')`
  justify-content: space-between;
  `}
  flex-wrap: wrap;
  padding: 29px 0;
  border-radius: 30px;
  ${Breakpoints.greaterThan('lg')`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;
    background: #fff;
  `}
  .category {
    cursor: pointer;
    p {
      margin: 0;
      font-size: 20px;
      font-weight: 400;
      color: #9f9f9f;
      padding: 0 1rem 0.9rem 1rem;
    }
  }
  .active {
    p {
      color: #6a4029;
      font-weight: 700;
    }
  }
  .active-border {
    box-shadow: 0px 6px 20px rgba(106, 64, 41, 0.67);
    border-bottom: 3px solid #6a4029;
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
  const role = await cookies(ctx).user_role;
  const { data } = await axios(`products/?searchBy=products.category_id&npp=4&page=1&search=1`);
  const initialData = data.data;
  return {
    props: { initialData, role }, // will be passed to the page component as props
  };
});
