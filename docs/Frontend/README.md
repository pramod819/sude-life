# Next.Js :raised_hand:

 Next.Js is an opensource react framework.

### :star2: Components

Components are [react components](https://reactjs.org/docs/components-and-props.html).

##### Steps to create frontend components

- Add components and related interface on [src/services/api/types.d.ts](https://gitlab.ekino.com/ekino-india-misc/headless-drupal/-/blob/main/nextjs/src/services/api/types.d.ts). You should use the same COMPONENT_KEY from backend
- Create a new folder under [src/components/common](https://gitlab.ekino.com/ekino-india-misc/headless-drupal/-/tree/main/nextjs/src/components/common) and add your component

```jsx
const StandardText: React.FunctionComponent<IApiStandardTextComponent> = (props) => {
  const { title, description, cta, type } = props

  return (
    <StyledContainer hasPadding>
      <StyledDiv layout={type}>
        {title && <Typography variant="h2">{title}</Typography>}
        {description && <div>{ReactHtmlParser(description)}</div>}
      </StyledDiv>
    </StyledContainer>
  )
}
```
Here the title, description, cta, and type values are getting from json response
- Add this component to [src/components/index.tsx](https://gitlab.ekino.com/ekino-india-misc/headless-drupal/-/blob/main/nextjs/src/components/index.tsx)
- make app-next-build
- make app-next-run

That's it.

#### Good practice to create components :pray:

- Dont use outdated libraries
- Reuse exiting libraries
- Use SASS
