// "use client"

// import React, { useState, useEffect } from 'react'
// import styles from './checklist.module.css';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown';


// export default function Page({ params }: { params: { id: string } }) {
//   const [formData, setFormData] = useState({
//     unit_number: '',
//     apt_number: '',
//     team_number: '',
//     member: '',
//     follow_up_1: false,
//     follow_up_2: false,
//     // Add more fields here
//   });

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | any>) => {
//     const { name, value, type, checked } = event.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     // Handle form submission here, you can use formData to send data to your API
//   };

//   return (
//     <main className={`min-h-screen ${styles.main}`}>
//       <div className={`${styles.title}`}>
//         <h1> Quality Control Checklist </h1>
//       </div>
      
//       <div className={`${styles.whitespace}`}></div>
    
//       <div className={`${styles.timecount}`}>
//         <button className={`${styles.timein}`} >Time In</button>
//         <button className={`${styles.timeout}`}>Time Out</button>
//         <div className={`${styles.timedisplay}`}><p></p></div>
//       </div>

//       <div className={`${styles.form}`} >
//       <form action="/handle_data" id="data-form" method="POST" name="data-form" onSubmit={handleSubmit}>
//             <div className={`${styles.information}`}>
//                 <input type="number" name="unit_number" value="{{d['unit_number']}}" id="unit_number" placeholder="Unit #" />
//                 <input type="number" name="apt_number" value="{{d['apt_number']}}" id="apt_number" placeholder="Apartment #" />
//                 <input type="number" name="team_number" value="{{d['team_number']}}" id="team_number" placeholder="Team #" />
//                 <input type="text" name="member" value="{{d['member']}}" id="member" placeholder="Completed By" />
//             </div>
//             {/* <div className={`${styles.candidate_info}`> */}
//             <div>
//                 <h1>Good Candidate For <FontAwesomeIcon icon={faArrowDown} />   <FontAwesomeIcon icon={faArrowDown} />   <FontAwesomeIcon icon={faArrowDown} /></h1>

//                 <div className={`styles.group_1}`}>
//                      {/* {% if d['follow_up_1'] == 'true' %}
//                          <input id="follow_up_1" type="checkbox" class="input" name="follow_up" onclick="prettifyCheckbox(this.id)" checked>  
//                      {% else %}
//                          <input id="follow_up_1" type="checkbox" class="input" name="follow_up" onclick="prettifyCheckbox(this.id)">  
//                      {% endif %}
//                      <label for="follow_up_1">Follow-Up on Energy Data Usage</label> */}
//                      <input id="follow_up_1" type="checkbox" className={styles.input} name="follow_up" />  
//                      <label htmlFor="follow_up_1">Follow-Up on Energy Data Usage</label> 
//                 </div>
//                 <div className={styles.group_2}>
//                     {/* {% if d['follow_up_2'] == 'true' %}
//                         <input id="follow_up_2" type="checkbox" class="input" name="follow_up" onclick="prettifyCheckbox(this.id)" checked> 
//                     {% else %}
//                         <input id="follow_up_2" type="checkbox" class="input" name="follow_up" onclick="prettifyCheckbox(this.id)"> 
//                     {% endif %} */}
//                     <input id="follow_up_2" type="checkbox" className={styles.input} name="follow_up" /> 
//                     <label htmlFor="follow_up_2">Interview for Resident Profile</label>
//                 </div>
//             </div>

//             <div className={styles.whitespace}></div>

//             <div className={styles.workday_numbers}>
//                 <div className={styles.seal}>
//                     {/* <!-- basically copy paste this thing but changed the text inside of the <h1></h1> to reflect the type (Faucet Aerators for aerator &  Miscellaneous for misc)--> */}
//                     <div className={styles.section_heading}><h1>Sealed / Caulked</h1></div>

//                     {/* <!-- as in the above, replace the seal w the appropriate category name--> */}
//                     <div className={styles.seal_content}>

//                         {/* <!-- each <div class="number_box"></div> represents a single entry for a specific type (you can see light switches below)--> */}
//                         <div className={`${styles.number_box} ${styles.box_even}`>
//                             <h3 className={styles.h3}>Light Switches</h3>
//                             <div className="toggle_num_input">
//                                 <button type="button" id="light_button_neg"><i class="fa-sharp fa-solid fa-user-minus"></i></button>
//                                 <input type="number" name="num_light_switches" value="{{d['lights']}}" id="num_light_switches" />
//                                 <button type="button" id="light_button_pos"><i class="fa-sharp fa-solid fa-user-plus"></i></button>
//                             </div>
//                         </div>

//                         <div class="number_box box_odd">
//                             <h3>Outlets</h3>
//                             <div class="toggle_num_input">
//                                 <button type="button" id="outlet_neg" onclick="decreaseButton('num_outlets')"><i class="fa-sharp fa-solid fa-user-minus"></i></button>
//                                 <input type="number" name="num_outlets" value="{{d['outlets']}}" id="num_outlets">
//                                 <button type="button" id="outlet_pos" onclick="increaseButton('num_outlets')"><i class="fa-sharp fa-solid fa-user-plus"></i></button>
//                             </div>
//                         </div>


//                         <div class="number_box box_even">
//                             <h3>Vents</h3>
//                             <div class="toggle_num_input">
//                                 <button type="button" id="vent_neg" onclick="decreaseButton('num_vents')"><i class="fa-sharp fa-solid fa-user-minus"></i></button>
//                                 <input type="number" name="num_vents" value="{{d['vents']}}" id="num_vents">
//                                 <button type="button" id="vent_pos" onclick="increaseButton('num_vents')"><i class="fa-sharp fa-solid fa-user-plus"></i></button>
//                             </div>
//                         </div>


//                         <div class="number_box box_odd">
//                             <h3>Windows</h3>
//                             <div class="toggle_num_input">
//                                 <button type="button" id="window_neg" onclick="decreaseButton('num_windows')"><i class="fa-sharp fa-solid fa-user-minus"></i></button>
//                                 <input type="number" name="num_windows" value="{{d['windows']}}" id="num_windows">
//                                 <button type="button" id="window_pos" onclick="increaseButton('num_windows')"><i class="fa-sharp fa-solid fa-user-plus"></i></button>
//                             </div>
//                         </div>


//                         <div class="number_box box_even">
//                             <h3>Baseboards</h3>
//                             <div class="toggle_num_input">
//                                 <button type="button" id="baseboard_neg" onclick="decreaseButton('num_baseboards')"><i class="fa-sharp fa-solid fa-user-minus"></i></button>
//                                 <input type="number" name="num_baseboards" value="{{d['baseboards']}}" id="num_baseboards">
//                                 <button type="button" id="baseboard_pos" onclick="increaseButton('num_baseboards')"><i class="fa-sharp fa-solid fa-user-plus"></i></button>
//                             </div>
//                         </div>

//                         <div class="number_box box_odd">
                            
//                         </div>
//                     </div>


//                 </div>

//                 <div class="aerator">
//                     <div class="section_heading"><h1>Faucet Aerators</h1></div>
                        
//                     <div class="aerator_content">
//                         <div class="number_box box_even">
//                             <h3>Bath</h3>
//                             <div class="toggle_num_input">
//                                 <button type="button" id="bath_neg" onclick="decreaseButton('num_bath')"><i class="fa-sharp fa-solid fa-user-minus"></i></button>
//                                 <input type="number" name="num_bath" value="{{d['bath']}}" id="num_bath">
//                                 <button type="button" id="bath_pos" onclick="increaseButton('num_bath')"><i class="fa-sharp fa-solid fa-user-plus"></i></button>
//                             </div>
//                         </div>

//                         <div class="number_box box_odd">
//                             <h3>Kitchen</h3>
//                             <div class="toggle_num_input">
//                                 <button type="button" id="kitchen_neg" onclick="decreaseButton('num_kitchen')"><i class="fa-sharp fa-solid fa-user-minus"></i></button>
//                                 <input type="number" name="num_kitchen" value="{{d['kitchen']}}" id="num_kitchen">
//                                 <button type="button" id="kitchen_pos" onclick="increaseButton('num_kitchen')"><i class="fa-sharp fa-solid fa-user-plus"></i></button>
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//                 <div class="misc">
//                     <div class="section_heading"><h1>Miscellaneous</h1></div>

//                     <div class="misc_content">
//                         <div class="number_box box_even">
//                             <h3>Shower Head</h3>
//                             <div class="toggle_num_input">
//                                 <button type="button" id="shower_neg" onclick="decreaseButton('num_shower')"><i class="fa-sharp fa-solid fa-user-minus"></i></button>
//                                 <input type="number" name="num_shower" value="{{d['shower']}}" id="num_shower">
//                                 <button type="button" id="shower_pos" onclick="increaseButton('num_shower')"><i class="fa-sharp fa-solid fa-user-plus"></i></button>
//                             </div>
//                         </div>

//                         <div class="number_box box_odd">
//                             <h3>Toilet Tummy</h3>
//                             <div class="toggle_num_input">
//                                 <button type="button" id="toilet_neg" onclick="decreaseButton('num_toilet')"><i class="fa-sharp fa-solid fa-user-minus"></i></button>
//                                 <input type="number" name="num_toilet" value="{{d['toilet']}}" id="num_toilet">
//                                 <button type="button" id="toilet_pos" onclick="increaseButton('num_toilet')"><i class="fa-sharp fa-solid fa-user-plus"></i></button>
//                             </div>
//                         </div>

//                         <div class="number_box box_even">
//                             <h3>Standard Power Strip</h3>
//                             <div class="toggle_num_input">
//                                 <button type="button" id="standard_strip_neg" onclick="decreaseButton('num_standard_strip')"><i class="fa-sharp fa-solid fa-user-minus"></i></button>
//                                 <input type="number" name="num_standard_strip" value="{{d['standard_strip']}}" id="num_standard_strip">
//                                 <button type="button" id="standard_strip_pos" onclick="increaseButton('num_standard_strip')"><i class="fa-sharp fa-solid fa-user-plus"></i></button>
//                             </div>
//                         </div>

//                         <div class="number_box box_odd">
//                             <h3>Smart Power Strip</h3>
//                             <div class="toggle_num_input">
//                                 <button type="button" id="smart_strip_neg" onclick="decreaseButton('num_smart_strip')"><i class="fa-sharp fa-solid fa-user-minus"></i></button>
//                                 <input type="number" name="num_smart_strip" value="{{d['smart_strip']}}" id="num_smart_strip">
//                                 <button type="button" id="smart_strip_pos" onclick="increaseButton('num_smart_strip')"><i class="fa-sharp fa-solid fa-user-plus"></i></button>
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//             </div>

//             <div class="whitespace"></div>

//             <div class="section_checklist_pt1">
//                 <div class="section_checklist-section">Living Room, Dining Room, Entryway, and Bedrooms</div>
//                 {% for x in range(7) %} 
//                     <button class="button-section_checklist row" type="button" id="button-row-{{x}}">
//                         <div class="where" id="div-row-{{x}}">
//                             {% if d['checklistVals'][x] == 'true' %}
//                                 <input type="checkbox" name="section_checklist-checkboxes" id="checkbox-row-{{x}}" checked>
//                             {% else %}
//                                 <input type="checkbox" name="section_checklist-checkboxes" id="checkbox-row-{{x}}">
//                             {% endif %}
//                             <p>{{ section_checklist[x]['where'] }}</p>

//                         </div>
//                         <div class="what"><b>What To Check For?</b></div>
//                         <div class="notes" id="notes-row-{{x}}">{{d['checklistNotes'][x]}}</div>
//                     </button>
//                 {% endfor %}
//             </div>
//             <div class="section_checklist_pt2">
//                 <div class="section_checklist-section">Bathrooms and Kitchen</div>
//                 {% for x in range(10) %} 
//                     <button class="button-section_checklist row" type="button" id="pt2button-row-{{x}}">
//                         <div class="where" id="pt2div-row-{{x}}">
//                             {% if d['checklistVals2'][x] == 'true' %}
//                                 <input type="checkbox" name="pt2section_checklist-checkboxes" id="pt2checkbox-row-{{x}}" checked>
//                             {% else %}
//                                 <input type="checkbox" name="pt2section_checklist-checkboxes" id="pt2checkbox-row-{{x}}">
//                             {% endif %}
//                             <p>{{ section_checklist_2[x]['where'] }}</p>
//                         </div>
//                         <div class="what"><b>What To Check For?</b></div>
//                         <div class="notes" id="pt2notes-row-{{x}}">{{d['checklistNotes2'][x]}}</div>
//                     </button>
//                 {% endfor %}
//             </div>
//         </form>
//     </div>

//     <div class="whitespace"></div>
//     <div class="whitespace"></div>

//     <div class="q-notes">
//         <h3 class="intro-notes-heading"><b> Quality Control Notes </b></h3>

//         <ul class="q-notes-square">
//             <li>
//                 <p>&#9633;  Ask that the resident walk through and view all of the improvements with you.</p>
//                 <ul class="q-notes-circle">
//                     <li>Explain the improvements and why they are important</li>
//                     <li>Allow the resident to check the function of the improvements (e.g., faucets, shower, lights, power strip)</li>
//                     <li>Ask if they are OK with the improvements and if they have any questions</li>
//                 </ul>
//             </li>
//             <li>
//                 <p>&#9633; Do not install toilet tank tummies on low-flow toilets (e.g., at Marbella).</p>
//             </li>
//             <li>
//                 <p>&#9633;  Ensure that aerators are working properly.</p>
//                 <ul class="q-notes-circle">
//                     <li>Turn water on and check for leaks and sprays</li>
//                     <li>Check the faucets in both the kitchen and the bathrooms</li>
//                 </ul>
//             </li>
//             <li>
//                 <p>&#9633;  Ensure that the showerhead is working properly.</p>
//                 <ul class="q-notes-circle">
//                     <li>Turn on water and check for leaks and sprays</li>
//                 </ul>
//             </li>
//             <li>
//                 <p>&#9633; Ensure that all outlet covers are fully, neatly, and tightly screwed back into the wall.</p>
//             </li>
//             <li>
//                 <p>&#9633; If loose, it may be necessary to replace mounting screws with longer screws.</p>
//             </li>
//             <li>
//                 <p>&#9633; Ensure all furniture is put back in place.</p>
//             </li>
//             <li>
//                 <p>&#9633; Ensure all trash is picked up and improvement areas are cleaned up.</p>
//             </li>
//             <li>
//                 <p>&#9633; Check to make sure the team does not leave any tools or supplies in the apartment.</p>
//             </li>
//             <li>
//                 <p>&#9633; Double-check the numbers for items installed and outlets/vents sealed for reporting.</p>
//             </li>
//         </ul>

//         <div class="whitespace"></div>

//         <div class="intro-notes">
//             <h3 class="intro-notes-heading"><b> Introductory & Educational Tips When Talking with Residents </b></h3>

//             <ul>
//                 <li>
//                     <p>We are volunteers with Energy Masters</p>
//                     <uL>
//                         <li>EM is a partnership of EcoAction Arlington, Arlington Thrive, Virginia Cooperative Extension, Arlington County, and City of Alexandria.</li>
//                         <li>This is a free program for residents; funded by a grant from Arlington County and City of Alexandria,  and donations to EcoAction Arlington.</li>
//                     </uL>
//                 </li>
//                 <li>
//                     <p>Purposes/Benefits: save money on rent/energy-water bills, increase comfort, and protect the planet/environment by using energy and water more efficiently, with less waste</p>
//                 </li>
//                 <li>
//                     <p>The team will be in your apartment for about 1 to 1.5 hours doing the following activities:</p>
//                     <uL>
//                         <li>Replacing light bulbs with more energy efficient bulbs</li>
//                         <li>Sealing air leaks around windows, doors, pipes, outlets, vents, fixtures, and cabinets/panels so that the air being heated or cooled stays in the apartment.</li>
//                         <li>Checking for water leaks & installing faucet aerators, low-flow showerheads, and toilet tank tummies</li>
//                         <li>Cleaning refrigerator coils</li>
//                         <li>Providing/installing power strip</li>
//                     </uL>
//                 </li>
//                 <li>
//                     <p>These improvements will help reduce water and utility (electric, gas) costs</p>
//                     <uL>
//                         <li>If bills paid directly by resident, they should see impacts in their next bills</li>
//                         <li>If utilities are paid by landlord, will help keep affordable & stabilize (minimize future increases to) the amount of rent they pay</li>
//                     </uL>
//                 </li>
//                 <li>
//                     <p>Walk around the apartment with the resident and have them: identify outlets and switches, identify drafty areas, and get permission to move furniture (as needed)</p>
//                 </li>
//             </ul>
//         </div>

//         <div class="workday-em-apartment-notes">
//             <h3 class="intro-notes-heading"><b> Energy Masters Apartment Workdays: Work Team Tips and Reminders</b></h3>

//             <h3><b>Safety Checks and Precautions</b></h3>
//             <ul>
//                 <li>While walking through the apartment to identify and plan the work activities (e.g., number and location of outlets, switch plates, vents, light fixtures, windows), be sure to look for signs of bed bugs, mold, and peeling paint.</li>
//                 <li>Bed bugs are big enough to be visible, but are less active during daylight and when people are active. During your walk-through check around the beds and nearby walls. As a preventative measure, place the supplies on a tile floor on a drop cloth or newspaper. </li>
//                 <li>If there is anything that makes you feel uncomfortable or unsafe, either with the apartment conditions or the behavior of the residents, do not proceed. Immediately exit the apartment, return to the staging area, and report the issues to the program coordinator.</li>
//             </ul>

//             <h3><b>Organizing the Work Team: Finding & Sealing Air Leaks</b></h3>
//             <ul>
//                 <li>While walking through the apartment to identify the work activities, map out a plan and assign tasks so that the team can complete the work as effectively and efficiently as possible.</li>
//                 <li>You might, for example, have a pair work on the outlets, switch plates, vents, etc. For example, Volunteer A starts by unscrewing covers and Volunteer B follows with the sealants. By the time Volunteer A finishes removing plates and covers, the caulking on the first outlets has probably dried; they can loop back to installing the foam gaskets and replacing the covers.</li>
//             </ul>
            
//             <h3><b>Finding & Sealing Air Leaks</b></h3>
//             <ul>
//                 <li>Use a flashlight to illuminate darker areas so that you can spot any gaps.</li>
//                 <li>Before applying caulk or spray foam, ensure the area is free of debris, clean, and dry.</li>
//                 <li>For areas with large gaps, first try to fill in with a backer rod, then apply caulk or foam.</li>
//                 <li>Keep in mind which areas require fire-rated caulk or foam (i.e., air handler cabinets, hot water heater pipes).</li>
//                 <li>Use rags to clean areas with excess or dripping caulk or foam.</li>
//                 <li>Allow time for caulk or foam to dry before installing gaskets and/or replacing covers.</li>
//                 <li>Remember to wear gloves when using any of the spray foam products.</li>
//                 <li>Look under sink cabinets to see if there are large gaps between the plumbing pipes and the drywall.  </li>
//                 <li>Check the top of the door/window trims & interior closet doors for gaps.</li>
//                 <li>Do not touch sprinkler areas on the ceiling.</li>
//             </ul>

//             <h3><b>Power Strip Installation & Usage</b></h3>
//             <ul>
//                 <li>Install the power strip(s) where there are the most devices – usually the TV and/or computer areas.</li>
//                 <li>Unless it’s a “smart” power strip, do not plug cable boxes, digital video recorders (DVRs), answering machines, or internet modems into them.</li>
//                 <li>Test to see that the devices still work after you have plugged them into the power strip.</li>
//                 <li>Explain to the resident that – to save energy/money – they will have to turn off the button/switch when not using the device(s).</li>
//             </ul>
            
//             <h3><b>Water Efficiency Enhancements</b></h3>
//             <ul>
//                 <li>When installing the low-flow showerheads, remember to first wrap the plumbing tape around the joint at least 4 times in clockwise direction</li>
//             </ul>

//             <h3><b>Miscellaneous</b></h3>
//             <ul>
//                 <li>Use the “Notes” section on the checklist for any observations that may be driving energy/water use outside the normal range (e.g., unit is keep extremely warm, windows are open while heat or AC is turned on, there are a lot of electronics)</li>
//             </ul>

//             <h3><b>Resident Education</b></h3>
//             <ul>
//                 <li>If the resident is really engaged, you have time, and you have the kill-a-watt device, show them how much energy some of their appliances and electronic devices are using when (1) turned on and plugged in, and (2) turned off and plugged in.</li>
//                 <li>If they are really engaged you can also talk with them about:</li>
//                 <li>Having them talk with their neighbors, family, and friends about what they have learned about saving money by simple steps (e.g., installing LEDs, aerators) and by being more mindful of the energy and water they use.</li>
//                 <li>How they can become an Energy Master….or participate in other EcoAction Arlington  and VCE volunteer activities</li>
//             </ul>
            
            
            
           
            
            
            
            



//         </div>

//     </div>

//     <div class="whitespace"></div>
//     <div class="whitespace"></div>

//     <div class="footer">
//         <div class="footer-a"><p>Form ID : {{d['form_id']}}</p></div>
//         <div class="footer-b"><button type="button" id="back_button"><a href="/wkdy/">Back</a></button></div>
//         <div class="footer-b"><button type="button" id="save_button" onclick="save()">Save</button></div>
//     </div>

//     <div class="popup-overlay">
//         <div class="popup-background" id="popup-background">
//             <div class="popup-message-box" id="popup-message-box">
//                 <div class="popup-message">
//                     <div class="check-for-list" id="check-for-list">
// <!--                      <ul>
//                             <li>Check for gaps or cracks around window and door trim.</li>
//                             <li>Apply caulk where necessary.</li>
//                         </ul>
//                     </div> -->  
//                     <textarea id="popup-notes" name="popup-notes" rows="5" cols="50" form="data-form" placeholder="Notes:"></textarea>
//                 </div>
//             </div>
//         </div>
//     </div>

//     </main>
//   )
// }