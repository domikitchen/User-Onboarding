import React from 'react';

export default function Form(props) {
    const { values, onInputChange, onCheckboxChange, disabled, onSubmit } = props;

    return (
        <div>
            <p>am tired</p>
            <form className = 'form' onSubmit = {onSubmit}>
                <div>
                    <label>Name:&nbsp;&nbsp;
                        <input
                            value = {values.name}
                            onChange = {onInputChange}
                            name = 'name'
                            type = 'text'
                        />
                    </label>
                    <label>Email:&nbsp;&nbsp;
                        <input
                            value = {values.email}
                            onChange = {onInputChange}
                            name = 'email'
                            type = 'email'
                        />
                    </label>
                    <label>Password:&nbsp;&nbsp;
                        <input
                            value = {values.password}
                            onChange = {onInputChange}
                            name = 'password'
                            type = 'text'
                        />
                    </label>
                    <br/>
                    <div className = 'checkboxes'>
                        <h4>What languages do you have experience with?</h4>
                        <p>please select all that apply:</p>
                        <label>HTML
                            <input
                                name = 'html'
                                type = 'checkbox'
                                onChange = {onCheckboxChange}
                                checked = {values.exp.html}
                            />
                        </label>
                        <label>CSS
                            <input
                                name = 'css'
                                type = 'checkbox'
                                onChange = {onCheckboxChange}
                                checked = {values.exp.css}
                            />
                        </label>
                        <label>JavaScript
                            <input
                                name = 'javascript'
                                type = 'checkbox'
                                onChange = {onCheckboxChange}
                                checked = {values.exp.javascript}
                            />
                        </label>
                        <label>Java
                            <input
                                name = 'java'
                                type = 'checkbox'
                                onChange = {onCheckboxChange}
                                checked = {values.exp.java}
                            />
                        </label>
                        <label>Python
                            <input
                                name = 'python'
                                type = 'checkbox'
                                onChange = {onCheckboxChange}
                                checked = {values.exp.python}
                            />
                        </label>
                        <label>C#
                            <input
                                name = 'csharp'
                                type = 'checkbox'
                                onChange = {onCheckboxChange}
                                checked = {values.exp.csharp}
                            />
                        </label>
                    </div>
                    <p>Please confirm that you have read and agreed to the <a href = 'https://i.kym-cdn.com/entries/icons/facebook/000/027/039/Screen_Shot_2018-08-31_at_11.30.15_AM.jpg' target = '_blank'>Terms of Service</a> to continue</p>
                    <label>Agree
                        <input
                            checked = {values.terms === 'Agree'}
                            value = 'Agree'
                            onChange = {onInputChange}
                            name = 'terms'
                            type = 'radio'
                        />
                        Disagree
                        <input
                            checked = {values.terms === 'Disagree'}
                            value = 'Disagree'
                            onChange = {onInputChange}
                            name = 'terms'
                            type = 'radio'
                        />

                    </label>
                </div>
                <button disabled = {disabled}>Submit</button>
            </form>
        </div>
    );
}