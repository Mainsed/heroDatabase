import React, {useEffect} from 'react'
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../FormControls/FormControls";
import {requiredField, minLength} from "../../Validators/validators";
import {getHero} from "../../Api/api";
import './EditHero.css';

const minLengthValidator = minLength(4);

let EditHeroForm = (props) => {

    const deletePhoto = (index) => {
        return () => props.photoDelete(index)
    }
    const addPhoto = () => {
        const src = prompt('Enter photo link');
        props.photoAdd(src);
    }

    return <form onSubmit={props.handleSubmit} className={'form'}>
        <div>
            <Field name={"nickname"}
                   type='text'
                   component={TextArea}
                   placeholder={'nickname'}
                   disabled={true}
                   validate={[requiredField, minLengthValidator]}
            />
            <Field name={"realName"}
                   type='text'
                   component={TextArea}
                   placeholder={'realName'}
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
            <div className={'imagesWrap'}>
                {
                    props.images && props.images.map((img, index) => {
                        return <div className={'imgWrap'} key={img}>
                            <img src={img} style={{width: '100px', height: '100px'}} alt="hero img"></img>
                            <div>
                                <button type={"button"}
                                        onClick={deletePhoto(index)}
                                        className={''}>
                                    <span className={'deleteButton'}>X</span>
                                </button>
                            </div>
                        </div>
                    })
                }
            </div>
            <button type={"button"} onClick={addPhoto}>add photo</button>
            <p style={{color: 'red'}}>{'props.loginError'}</p>
        </div>
        <div>
            <button>
                Save
            </button>
        </div>
    </form>
}

EditHeroForm = reduxForm({form: 'create', enableReinitialize: true})(EditHeroForm)


const EditHero = (props) => {

    useEffect(async () => {
        props.setHero(await getHero(props.match.params.id));
    }, [props.match.params.id])

    const onSubmit = (formData) => {
        props.confirmChangesThunk({
            realName: formData.realName,
            nickname: formData.nickname,
            description: formData.description,
            superPowers: formData.superPowers,
            catchPhrases: formData.catchPhrases,
            images: props.hero.images
        });
    }
    return <div>
        <h1>Edit</h1>
        <EditHeroForm onSubmit={onSubmit}
                      initialValues={props.hero}
                      images={props.hero && props.hero.images}
                      id={props.hero && props.hero._id}
                      photoDelete={props.photoDelete}
                      photoAdd={props.photoAdd}
        />
    </div>
}

export default EditHero;