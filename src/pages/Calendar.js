import React, { useState } from 'react';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    const [selected, setSelected] = useState();

    let footer = <p className='mt-5 font-bold'>Please pick a day. </p>;
    if (selected) {
        footer = <p className='mt-5 font-bold'>You picked {format(selected, 'PP')}.</p>;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const disabledDays = [
        { from: new Date(1000, 1, 1), to: yesterday }
      ];

    return (
        <Page>
            <Layout >
                <div className="flex justify-center items-center my-12 p-5 rounded border-2">
                    <DayPicker
                        mode="single"
                        selected={selected}
                        disabled={disabledDays}
                        onSelect={setSelected}
                        footer={footer}
                    />
                </div>
            </Layout>
        </Page>
    );
};

export default Calendar;