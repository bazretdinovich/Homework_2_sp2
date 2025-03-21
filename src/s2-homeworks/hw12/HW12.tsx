import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType, changeThemeId, initialState} from './bll/themeReducer'



const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const HW12 = () => {
    // взять ид темы из редакса
    const themeId = useSelector<AppStateType>(state => state.theme.themeId)
    const dispatch = useDispatch()

    const change = (id: 1 | 2 | 3) => { // дописать функцию
        dispatch(changeThemeId(id))
    }

    useEffect(() => {
        console.log(themeId)
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>

            <div className={s2.hw}>
                <span>Выберите тему</span>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    options={themes}
                    onChangeOption={change}
                />
            </div>
        </div>
    )
}

export default HW12
