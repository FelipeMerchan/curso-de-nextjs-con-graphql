import React from 'react'
import { Card } from 'semantic-ui-react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgUrl } from '@service/assets'
import { Avocado } from '@service/graphql'

type ProductListProps = {
  products: Avocado[]
}

const mapProductsToCards = (products: Avocado[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href={`/product/${id}`} passHref>
      <Card
        as="a"
        header={name}
        image={{
          children: (
            <Image
              src={getImgUrl(image)}
              alt={name}
              width={333}
              height={333}
            />
          ),
        }}
        meta={{
          children: <Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>,
        }}
      />
    </Link>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={2} stackable>
    {mapProductsToCards(products)}
  </Card.Group>
)

export default ProductList
