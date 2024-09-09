import { useState, useEffect, useRef } from "react";
import stud_img from '../assets/res.jpg';
import { raw_data } from '../util/data'; 


function Profile({ inputData }) {
    const [raw_Arr, set_arr] = useState({});
    const [table_show, set_tableshow] = useState(false);

   
    useEffect(() => {
        const found = raw_data.find(
            (item) => item.sname.trim().toLowerCase() === inputData.toLowerCase().trim()
        );
        if (found) {
            set_arr(found);
            set_tableshow(true);
        } else {
            set_tableshow(false);
        }
    }, [inputData]); // Dependency array ensures this runs when inputData changes


    return (
        <>
            {table_show ? (
                <div className="flex flex-row w-100 h-[100vh] items-center justify-center">
                
                <div className="border border-2 border-slate-400 p-4 rounded-md lg:w-[40%] xl:w-[40%] md:w-[50%] sm:w-[100%]">
                    <h2 className="text-3xl">DST-TEC, Bundelkhand University, 
                        Jhansi Stride module 2 Result</h2>
                    <div className="flex flex-row w-[100%] h-[200px] justify-center">
                        <img src={stud_img} alt="" className="text-center items-center justify-center flex flex-row"/>
                    </div>
                    <div className="flex lg:flex-row md:flex-row sm:flex-col mt-4">
                        <div className="lg:w-[50%] md:w-[50%] sm:w-[100%] font-bold">Name  </div>
                        <div className="lg:w-[50%] md:w-[50%] sm:w-[100%] xs:m-2 pl-2">{raw_Arr.sname}</div>
                    </div>
                    <div className="flex lg:flex-row md:flex-row sm:flex-col text-balance mt-4">
                        <div className="lg:w-[50%] md:w-[50%] sm:w-[100%]  border-slate-300 font-bold">Register Number   </div>
                        <div className="lg:w-[50%] md:w-[50%] sm:w-[100%]  border-slate-300 text-balance pl-2">{raw_Arr.reg_no}</div>
                    </div>
                    <div className="flex lg:flex-row md:flex-row sm:flex-col text-balance mt-4">
                        <div className="lg:w-[50%] md:w-[50%] sm:w-[100%] border-slate-300 font-bold">Afiliation    </div>
                        <div className="lg:w-[50%] md:w-[50%] sm:w-[100%] text-balance pl-2">{raw_Arr.afiliation}</div>
                    </div>
                    <div className="flex lg:flex-row md:flex-row sm:flex-col pl-2 text-balance border border-1 border-slate-400">
                        <div className="lg:w-[50%] md:w-[50%] sm:w-[100%] border-b-1 border-slate-300 ">Assessment 1     </div>
                        <div className="lg:w-[50%] md:w-[50%] sm:w-[100%] border-b-1 border-slate-300 text-balance pl-2">{raw_Arr.assessment1}</div>
                    </div>
                    <div className="flex lg:flex-row md:flex-row sm:flex-col pl-2 text-balance border border-1 border-slate-400">
                        <div className="lg:w-[50%] md:w-[50%] sm:w-[100%] border-b-1 border-slate-300  ">Assessment 2      </div>
                        <div className="lg:w-[50%] md:w-[50%] sm:w-[100%] border-b-1 border-slate-300 text-balance pl-2">{raw_Arr.assessment2}</div>
                    </div>
                    <div className="flex lg:flex-row md:flex-row sm:flex-col pl-2 text-balance border border-1 border-slate-400">
                        <div className="lg:w-[50%] md:w-[50%] sm:w-[100%] border-b-1 border-slate-300 ">Ideation     </div>
                        <div className="lg:w-[50%] md:w-[50%] sm:w-[100%] border-b-1 border-slate-300 text-balance pl-2">{raw_Arr.ideation}</div>
                    </div>
                    <div className="flex lg:flex-row md:flex-row sm:flex-col pl-2 text-balance border border-1 border-slate-400">
                        <div className="lg:w-[50%] md:w-[50%] sm:w-[100%] border-b-1 border-slate-300 ">PDS     </div>
                        <div className="lg:w-[50%] md:w-[50%] sm:w-[100%] border-b-1 border-slate-300 text-balance pl-2">{raw_Arr.pds}</div>
                    </div>
                    <div className="flex lg:flex-row md:flex-row sm:flex-col pl-2 text-balance border border-1 border-slate-400">
                        <div className="lg:w-[50%] md:w-[50%] sm:w-[100%] border-b-1 border-slate-300 font-bold ">Total     </div>
                        <div className="lg:w-[50%] md:w-[50%] sm:w-[100%] border-b-1 border-slate-300 text-balance font-bold pl-2">{raw_Arr.total}</div>
                    </div>
                    <div className="flex lg:flex-row md:flex-row sm:flex-col pl-2 text-balance border border-1 border-slate-400">
                        <div className="lg:w-[50%] md:w-[50%] sm:w-[100%] border-b-1 border-slate-300 font-bold ">Percentage    </div>
                        <div className="lg:w-[50%] md:w-[50%] sm:w-[100%] border-b-1 border-slate-300 text-balance font-bold pl-2">{raw_Arr.percentage}</div>
                    </div>
                    <div className="flex lg:flex-row md:flex-row sm:flex-col pl-2 text-balance border border-1 border-slate-400">
                        <div className="lg:w-[50%] md:w-[50%] sm:w-[100%] border-b-1 border-slate-300 font-bold ">Grade     </div>
                        <div className="lg:w-[50%] md:w-[50%] sm:w-[100%] border-b-1 border-slate-300 text-balance font-bold pl-2">{raw_Arr.grade}</div>
                    </div>
                </div>
            </div>
            ) : (
                <div className="flex flex-row text-4xl text-center">User Not found!!</div>
            )}
           

           
        </>
    );
}

export default Profile;
