import React from 'react'
import Layout from '../components/Layout';
import countriesData from "../tabledata/countries";
import { Badge, Pagination } from "flowbite-react";
import { Modal, Button, Toast } from "flowbite-react";

const Withdrawals = () => {
  return (
    <Layout>
      <div className="mt-5 relative">
        <h1 className="text-2xl font-semibold text-center">
          Withdrawal Requests
        </h1>
        <div className="max-w-4xl mx-auto p-5">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 text-center">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-center ">
                    Email
                  </th>
                  {/* <th scope="col" className="px-6 py-3">
                    
                  </th> */}
                  <th
                    scope="col"
                    className="px-0 py-3  whitespace-nowrap text-center"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  whitespace-nowrap text-center"
                  >
                    Date requested
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  whitespace-nowrap text-center"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  whitespace-nowrap text-center"
                  >
                    Bank name/<br></br>
                    Bank account
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  whitespace-nowrap text-center"
                  >
                    
                  </th>

                  {/* <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th> */}
                  {/* <th scope="col" className="px-6 py-3">
                          <span className="sr-only">Delete</span>
                        </th> */}
                </tr>
              </thead>
              <tbody>
                {countriesData.map((countries) => (
                  <tr
                    key={countries.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="px-0 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-center"
                    >
                      {countries.name}
                    </th>
                    <td className="px-6 py-4 truncate text-center">
                      {countries.capital}
                    </td>
                    <td className="px- py-4 flex justify-center  mx-auto">
                      {countries.id}
                      {/* {" "}
                      <Badge color="success" size="sm">
                        Approved
                      </Badge> */}
                    </td>
                    <td className="px-6 py-4 truncate text-center">
                      {countries.capital}
                    </td>
                    <td className="px-6 py-4 truncate">
                      <React.Fragment>
                        <Button
                          color="warning"
                          size="xs"
                          // onClick={toggleModal}
                        >
                          Pending
                        </Button>
                      </React.Fragment>
                    </td>
                    <td className="px-6 py-4 truncat text-cente">
                      {countries.status}
                      <br></br>
                      {countries.language}
                    </td>
                    <td className="px-0 py-4 truncate">
                      <React.Fragment>
                        <Button
                          color="success"
                          size="xs"
                          // onClick={toggleModal}
                        >
                          Approve withdrawl
                        </Button>
                      </React.Fragment>
                    </td>

                    {/* <td className="px-6 py-4 text-center">
                      {countries.language}
                    </td>
                    */}

                    {/* <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="my-3">
              <Pagination
                currentPage={1}
                // onPageChange={onPageChange}
                showIcons={true}
                totalPages={100}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Withdrawals