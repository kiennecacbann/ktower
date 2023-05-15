import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../container/Footer/Footer';
const Bill = () => {
    return (
        <div>
            <Header />
            <div className='px-14 border-t-[0.1px] border-black pb-20'>
                <div className='flex justify-between font-bold pb-10 pt-10'>
                    <p>Căn Hộ: KT.B5.06.04</p>
                    <p>Chủ Hộ: Nguyễn Trung Kiên</p>
                    <p>STT: 294</p>
                </div>
                <table className='table-auto border-separate border-black border w-full text-center'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Fees in details:</th>
                            <th>Unit</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Money</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='font-bold'>
                            <td>A</td>
                            <td>Management Fee in April</td>
                            <td className='font-normal'>m²</td>
                            <td className='font-normal'>6.000</td>
                            <td className='font-normal'>80,70</td>
                            <td >484.200</td>
                            <td></td>
                        </tr>
                        <tr className='font-bold'>
                            <td>B</td>
                            <td>Water Fee</td>
                            <td className='font-normal'>VND</td>
                            <td></td>
                            <td></td>
                            <td >302.088</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <table className='w-full'>
                                <th>Old numeral</th>
                                <td>1.721</td>
                                <th>New numeral</th>
                                <td>1.742</td>
                            </table>
                            <td>m³</td>
                            <td></td>
                            <td>21</td>
                            <td colSpan='2'>From 30/3/2023 to 30/4/2023</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>In the norm</td>
                            <td>m³</td>
                            <td>8.941</td>
                            <td>8</td>
                            <td>71.528</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Out of the norm 1</td>
                            <td>m³</td>
                            <td>16.474</td>
                            <td>4</td>
                            <td>65.896</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Out of the norm 2</td>
                            <td>m³</td>
                            <td>18.296</td>
                            <td>9</td>
                            <td>164.664</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='font-bold'>C</td>
                            <td className='font-bold'>Parking Fee</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='font-bold'>280.000</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Motorbike under 110CC</td>
                            <td>Piece</td>
                            <td>60.000</td>
                            <td>2</td>
                            <td>120.000</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Motorbike 110CC-175CC</td>
                            <td>Piece</td>
                            <td>80.000</td>
                            <td>2</td>
                            <td>160.000</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Motorbike above 175CC</td>
                            <td>Piece</td>
                            <td>100.000</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Delivery Motorbike</td>
                            <td>Piece</td>
                            <td>150.000</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Car 4-6 seats</td>
                            <td>Piece</td>
                            <td>750.000</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Car 4-6 seats (sometimes)</td>
                            <td>Piece</td>
                            <td>375.000</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Car 7-9 seats</td>
                            <td>Piece</td>
                            <td>850.000</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Truck</td>
                            <td>Piece</td>
                            <td>3.000.000</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className='font-bold'>
                            <td>D</td>
                            <td>Old debts</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className='font-bold'>
                            <td colSpan='5'>Total</td>
                            <td>1.066.288</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <div className='font-bold'>
                    <p>Please payment from 05/04 to end of 14/04!</p>
                    <p className='flex'>Please pay via the apartment's account number:  <p className='text-red-600 font-bold'>129000105414 VietinBank - Branch 7.</p></p>
                    <p className='flex'>Content of pay: <p className='text-red-600'>A26-KT.B5.06.04 paying fee in April 2023.</p></p>
                    <p className='flex'>Any errors residents please contact the management to resolve. Hotline: <p className='text-red-600'>0388314851.</p> </p>
                    <p>Thanks!</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Bill