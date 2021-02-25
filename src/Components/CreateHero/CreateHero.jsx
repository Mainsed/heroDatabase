import React, {} from 'react'
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../FormControls/FormControls";
import {requiredField, minLength} from "../../Validators/validators";

const minLengthValidator = minLength(4);

let CreateHeroForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"realName"}
                   type='text'
                   component={TextArea}
                   placeholder={'realName'}
                   validate={[requiredField, minLengthValidator]}
            />
            <Field name={"nickname"}
                   type='text'
                   component={TextArea}
                   placeholder={'nickname'}
                   validate={[requiredField, minLengthValidator]}
            />
            <Field name={"description"}
                   type='text'
                   component={TextArea}
                   placeholder={'description'}
                   validate={[requiredField, minLengthValidator]}
            />
            <Field name={"superPowers"}
                   type='text'
                   component={TextArea}
                   placeholder={'superPowers'}
                   validate={[requiredField, minLengthValidator]}
            />
            <Field name={"catchPhrases"}
                   type='text'
                   component={TextArea}
                   placeholder={'catchPhrases'}
                   validate={[requiredField, minLengthValidator]}
            />
            <Field name={"images"}
                   type='text'
                   component={TextArea}
                   placeholder={'images'}
                   validate={[requiredField, minLengthValidator]}
            />
        </div>
        <div>
            <button>
                Create
            </button>
        </div>
    </form>
}

CreateHeroForm = reduxForm({form: 'create'})(CreateHeroForm)


const CreateHero = (props) => {
    const onSubmit = (formData) => {
        debugger;
        props.createHeroThunk({
            realName: formData.realName,
            nickname: formData.nickname,
            description: formData.description,
            superPowers: formData.superPowers,
            catchPhrases: formData.catchPhrases,
            images: formData.images
        });
    }

    return <div>
        <h1>Create hero</h1>
        <CreateHeroForm onSubmit={onSubmit}/>
    </div>
}

export default CreateHero;