import { getImgUrl } from '@service/assets'
import { Avocado } from '@service/graphql'
import Image from 'next/image'
import React from 'react'
import { Item, Label } from 'semantic-ui-react'

import AddToCart from './AddToCart'
import ProductAttributes from './ProductAttributes'

type ProductSummaryProps = {
  product: Avocado
}

const ProductSummary = ({ product }: ProductSummaryProps) => (
  <>
    <Item.Group as="section">
      <Item style={{ alignItems: 'center' }}>
        <Item.Image size="medium">
          <Image
            src={getImgUrl(product.image)}
            alt={product.name}
            width={333}
            height={333}
          />
        </Item.Image>
        <Item.Content>
          <Item.Header as="h1">{product.name}</Item.Header>
          <Item.Description>
            <p>{product.price}</p>
            <Label>{`SKU: ${product.sku}`}</Label>
          </Item.Description>
          <Item.Extra>
            <AddToCart product={product} />
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
    <ProductAttributes {...product.attributes} />
  </>
)

export default ProductSummary
