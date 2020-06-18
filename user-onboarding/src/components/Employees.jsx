import React, { useEffect } from 'react';
import axios from 'axios';

export default function Employees(props) {
    const { details } = props;

    return (
        <div>
            <h4>{details.name}</h4>
            <p>{details.email}</p>
            <div>
                <p>Languages:</p>
                <ul>
                    {
                        details.exp.map((ex, index) => {
                            return (
                                <li key = {index}>{ex}</li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}