import { useCustomization } from '../hooks/useCustomization'

const colorsArr = [
  {
    name: 'brown',
    value: 'brown',
  },
  {
    name: 'darkblue',
    value: 'darkblue',
  },
  {
    name: 'orange',
    value: 'orange',
  },
  {
    name: 'red',
    value: 'red',
  },
  {
    name: 'green',
    value: 'green',
  },
  {
    name: 'purple',
    value: 'purple',
  },
  {
    name: 'white',
    value: 'white',
  },
  {
    name: 'pink',
    value: 'pink',
  },
  {
    name: 'hotpink',
    value: 'hotpink',
  },
]

const plasticColorsArr = [
  {
    name: 'white',
    value: 'white',
  },
  {
    name: 'black',
    value: 'black',
  },
]

const metalsArr = [
  {
    name: 'gold',
    value: 'gold',
  },
  {
    name: 'black',
    value: 'black',
  },
]

export default function Configurator() {
  const {
    material,
    setMaterial,
    activeColor,
    setActiveColor,
    plasticColor,
    setPlasticColor,
    metalColor,
    setMetalColor,
  } = useCustomization()

  function chooseMaterial(material: 'leather' | 'fabric') {
    setMaterial(material)
  }

  function chooseColor(color: string) {
    setActiveColor(color)
  }

  function choosePlastic(color: string) {
    setPlasticColor(color)
  }

  function chooseMetal(color: string) {
    setMetalColor(color)
  }

  return (
    <div className='configurator'>
      <h1 className='configurator__title'>Chair Configuration</h1>

      <div className='configurator__select-box'>
        <h2 className='configurator__subtitle'>Material</h2>
        <div className='configurator__select-box__buttons-wrapper'>
          <button
            className='configurator__select-box__material-btn'
            data-active={material === 'leather'}
            onClick={() => chooseMaterial('leather')}
          >
            leather
          </button>
          <button
            className='configurator__select-box__material-btn'
            data-active={material === 'fabric'}
            onClick={() => chooseMaterial('fabric')}
          >
            fabric
          </button>
        </div>
      </div>

      <div className='configurator__select-box'>
        <h2 className='configurator__subtitle'>Colors</h2>
        <div className='configurator__select-box__buttons-wrapper'>
          {colorsArr.map((item, index) => (
            <div
              key={index}
              className='configurator__select-box__buttons-wrapper__button-wrap'
            >
              <button
                className='configurator__select-box__color-btn'
                data-active={activeColor === item.name}
                onClick={() => chooseColor(item.value)}
                style={{
                  backgroundColor: item.value,
                }}
              />

              <span className='configurator__select-box__label'>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className='configurator__select-box'>
        <h2 className='configurator__subtitle'>Plastic</h2>
        <div className='configurator__select-box__buttons-wrapper'>
          {plasticColorsArr.map((item, index) => (
            <div
              key={index}
              className='configurator__select-box__buttons-wrapper__button-wrap'
            >
              <button
                key={index}
                className='configurator__select-box__color-btn'
                data-active={plasticColor === item.name}
                onClick={() => choosePlastic(item.value)}
                style={{
                  backgroundColor: item.value,
                }}
              />

              <span className='configurator__select-box__label'>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className='configurator__select-box'>
        <h2 className='configurator__subtitle'>Metal</h2>
        <div className='configurator__select-box__buttons-wrapper'>
          {metalsArr.map((item, index) => (
            <div
              key={index}
              className='configurator__select-box__buttons-wrapper__button-wrap'
            >
              <button
                key={index}
                className='configurator__select-box__color-btn'
                data-active={metalColor === item.name}
                onClick={() => chooseMetal(item.value)}
                style={{
                  backgroundColor: item.value,
                }}
              />

              <span className='configurator__select-box__label'>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
