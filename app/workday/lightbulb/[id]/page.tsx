"use client"

import React, { useState, useEffect } from 'react'
import styles from './checklist.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown';
import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';


export default function Page({ params }: { params: { id: string } }) {
    return (
        <>

            <div className="title">
                <h1> Lightbulb Checklist </h1>
            </div>

            <div className="site-info flex flex-col items-center justify-items-center">
                <input className="site-info-input" type="number" name="unit_number" value="" id="unit_number" placeholder="Unit #" />
                <input className="site-info-input" type="number" name="apt_number" value="" id="apt_number" placeholder="Apartment #" />
                <input className="site-info-input" type="text" name="member" value="" id="member" placeholder="Completed By" />
            </div>

            {/* <button type="button" onclick="createEntry()" id="createButton"><i class="fa-solid fa-plus"></i> <i class="fa-solid fa-plus"></i>  Create New Entry  <i class="fa-solid fa-plus"></i>   <i class="fa-solid fa-plus"></i></button> */}
            <button type="button" className="w-full rounded-xl bg-slate-400 text-center h-[40px] mt-[5%] transition-transform transform hover:scale-105"><FontAwesomeIcon icon={faPlus} /><FontAwesomeIcon icon={faPlus} />  Create New Entry   <FontAwesomeIcon icon={faPlus} /> <FontAwesomeIcon icon={faPlus} /></button>
            <div className="whitespace"></div>
            <div className="whitespace"></div>

            <div className="entries" id="entries">
                <div className="entry">
                    <p><b><i>#1</i></b></p>
                    <div className="entry-bulb-type old">
                        <p><b>Bulb Removed Type</b> <FontAwesomeIcon icon={faArrowRight} /></p>

                        <input id="bulb-type0-0" type="radio" className="bulb-type" name="bulbType-0" value="Incandescent" />
                        <label htmlFor="bulb-type0-0">Incandescent</label>

                        <input id="bulb-type1-0" type="radio" className="bulb-type" name="bulbType-0" value="CFL" />
                        <label htmlFor="bulb-type1-0">CFL</label>

                        <input id="bulb-type2-0" type="radio" className="bulb-type" name="bulbType-0" value="Fluorescent Tube" />
                        <label htmlFor="bulb-type2-0">Fluorescent Tube</label>

                        <input id="bulb-type3-0" type="radio" className="bulb-type" name="bulbType-0" value="Other" />
                        <label htmlFor="bulb-type3-0">Other</label>
                    </div>
                    <div id="other-0">
                        <input type="text" name="input-0-other" value="" id="input-0-other" className="entry-input" placeholder="Other Bulb Type" />
                    </div>

                    <input type="text" name="location-0" value="" id="location-0" className="entry-input" placeholder="Room Location (i.e. kitchen)" />
                    <input type="number" name="wattage-0" value="" id="wattage-0" className="entry-input" placeholder="Bulb Removed Wattage (W)" />

                    <div className="whitespace"></div>
                    <div className="whitespace"></div>
                    <div className="whitespace"></div>

                    <div className="entry-bulb-type new">
                        <p><b>LED Replacement Bulb</b> <i className="fa-solid fa-arrow-right"></i></p>

                        <input id="led-type0-0" type="radio" className="bulb-type" name="ledType-0" value="5.5W" />
                        <label htmlFor="led-type0-0">5.5W</label>

                        <input id="led-type1-0" type="radio" className="bulb-type" name="ledType-0" value="6W" />
                        <label htmlFor="led-type1-0">6W</label>

                        <input id="led-type2-0" type="radio" className="bulb-type" name="ledType-0" value="9W" />
                        <label htmlFor="led-type2-0">9W</label>

                        <input id="led-type3-0" type="radio" className="bulb-type" name="ledType-0" value="Other" />
                        <label htmlFor="led-type3-0">Other</label>
                    </div>
                    <div id="led-other-0">
                        <input type="text" name="led-input-0-other" value="" id="led-input-0-other" className="entry-input" placeholder="Other Bulb Type" />
                    </div>
                </div>

                <div className="whitespace"></div>
                <div className="whitespace"></div>

            </div>

            <p id="hidden-entry-count">1</p>
            <p id="hidden-total-count">1</p>

            <div className="footer">
                <div className="footer-a"><p>8738427486623</p></div>
                <div className="footer-b"><button type="button" id="back_button"><a href="/wkdy/">Back</a></button></div>
                <div className="footer-b"><button type="button" id="save_button">Save</button></div>
            </div>
        </>
    )
}