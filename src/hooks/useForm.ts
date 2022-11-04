export const useForm = () => {
  const getFormValue = (formTarget: HTMLFormElement, keys: string[]) => {
    const formData = new FormData(formTarget)
    const formValue = {} as any

    formData.forEach((value, key) => {
      formValue[key] = value
    })

    const formValuesArr = keys.map(key => ({
      [key]: formValue[key]
    }))

    const result = Object.assign({}, ...formValuesArr);

    return result
  }

  return {
    getFormValue
  }
}