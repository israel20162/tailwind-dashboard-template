import React from 'react';

import Image01 from '../../images/user-36-05.jpg';
import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-07.jpg';
import Image04 from '../../images/user-36-08.jpg';
import Image05 from '../../images/user-36-09.jpg';

function Withdraws() {

  const customers = [
    {
      id: '0',
      image: Image01,
      name: 'Alex Shatov',
      email: 'alexshatov@gmail.com',
      location: '🇺🇸',
      spent: '$2,890.66',
    },
    {
      id: '1',
      image: Image02,
      name: 'Philip Harbach',
      email: 'philip.h@gmail.com',
      location: '🇩🇪',
      spent: '$2,767.04',
    },
    {
      id: '2',
      image: Image03,
      name: 'Mirko Fisuk',
      email: 'mirkofisuk@gmail.com',
      location: '🇫🇷',
      spent: '$2,996.00',
    },
    {
      id: '3',
      image: Image04,
      name: 'Olga Semklo',
      email: 'olga.s@cool.design',
      location: '🇮🇹',
      spent: '$1,220.66',
    },
    {
      id: '4',
      image: Image05,
      name: 'Burak Long',
      email: 'longburak@gmail.com',
      location: '🇬🇧',
      spent: '$1,890.66',
    },
  ];

  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex justify-between Withdraws-center ">
        <h2 className="font-semibold text-slate-800">New Withdrawal requests</h2>
        <span className="cursor-pointer font-semibold text-slate-800">View All</span>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">User</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">User</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Approved</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Daily Price</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Weekly Price</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Monthly Price</div>
                </th>
                
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {
                customers.map(customer => {
                  return (
                    <tr key={customer.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex Withdraws-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img className="rounded-full" src={customer.image} width="40" height="40" alt={customer.name} />
                          </div>
                          <div className="font-medium text-slate-800">{customer.name}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex Withdraws-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img className="rounded-full" src={customer.image} width="40" height="40" alt={customer.name} />
                          </div>
                          <div className="font-medium text-slate-800">{customer.name}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{customer.email}</div>
                      </td>
                     
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default Withdraws;
