# Documentación del Esquema Prisma
Modelos y Relaciones

**Modelo User**
Descripción: Representa a un usuario del sistema.

*Campos*:

id (Int): Identificador único del usuario.
username (String): Nombre de usuario único.
email (String): Correo electrónico único.
password (String): Contraseña del usuario.
firstName (String): Primer nombre del usuario.
lastName (String): Apellido del usuario.
age (Int): Edad del usuario.
createdAt (DateTime): Fecha y hora de creación del usuario. Predeterminado a la fecha y hora actual.
updatedAt (DateTime): Fecha y hora de la última actualización del usuario. Actualizado automáticamente.

*Relaciones*:

orders (Order[]): Pedidos realizados por el usuario.
userComments (Comments[]): Comentarios hechos por el usuario.
userProducts (Products[]): Productos creados por el usuario.
userRoles (UserRole[]): Roles asignados al usuario.
reviews (Reviews[]): Reseñas escritas por el usuario.
addresses (Address[]): Direcciones asociadas al usuario.

**Modelo Address**
Descripción: Representa una dirección asociada a un usuario.

*Campos*:

id (Int): Identificador único de la dirección.
userId (Int): Identificador del usuario asociado a la dirección.
addressLine1 (String): Línea principal de la dirección.
addressLine2 (String?): Línea secundaria de la dirección (opcional).
city (String): Ciudad de la dirección.
state (String): Estado o provincia de la dirección.
postalCode (String): Código postal de la dirección.
country (String): País de la dirección.

*Relaciones*:

user (User): Usuario asociado a esta dirección.
orders (Order[]): Pedidos asociados a esta dirección.

**Modelo Products**
Descripción: Representa un producto disponible en el sistema.

*Campos*:

id (Int): Identificador único del producto.
title (String): Título del producto.
description (String): Descripción del producto.
categoryId (Int): Identificador de la categoría del producto.
price (Float): Precio del producto.
stock (Int): Cantidad en stock.
image (String): URL de la imagen del producto.
authorId (Int): Identificador del usuario que creó el producto.
createdAt (DateTime): Fecha y hora de creación del producto. Predeterminado a la fecha y hora actual.
updatedAt (DateTime): Fecha y hora de la última actualización del producto. Actualizado automáticamente.

*Relaciones*:

author (User): Usuario que creó el producto.
category (Category): Categoría del producto.
productComments (Comments[]): Comentarios asociados al producto.
orderItems (OrderItem[]): Artículos de pedido asociados al producto.
reviews (Reviews[]): Reseñas asociadas al producto.
applicableToProducts (Offer[]): Ofertas aplicables a este producto.

**Modelo Category**
Descripción: Representa una categoría de productos.

*Campos*:

id (Int): Identificador único de la categoría.
name (String): Nombre de la categoría.

*Relaciones*:

offers (Offer[]): Lista de ofertas aplicables a esta categoría.
products (Products[]): Lista de productos que pertenecen a esta categoría.

**Modelo Offer**
Descripción: Representa una oferta o descuento aplicable a productos en el sistema. Las ofertas pueden aplicarse a categorías completas de productos, facilitando la gestión de promociones.

*Campos*

id (Int): Identificador único de la oferta.
title (String): Título de la oferta.
description (String): Descripción detallada de la oferta.
discountType (String): Tipo de descuento (porcentaje, monto fijo, etc.).
discountValue (Float): Valor del descuento.
startDate (DateTime): Fecha de inicio de la oferta.
endDate (DateTime): Fecha de finalización de la oferta.
minOrderAmount (Float?): Monto mínimo de pedido para que la oferta sea aplicable (opcional).
createdAt (DateTime): Fecha de creación de la oferta.

*Relaciones*
applicableToCategories (Category[]): Lista de categorías a las que se aplica la oferta.
offerUse (OfferUsage[]): Lista de usos de la oferta en pedidos específicos.

**Modelo OfferUsage**
Descripción: Registra el uso de una oferta en un pedido específico.

*Campos*:

id (Int): Identificador único del uso de la oferta.
offerId (Int): Identificador de la oferta utilizada.
orderId (Int): Identificador del pedido donde se aplicó la oferta.
usedAt (DateTime): Fecha y hora en que se utilizó la oferta.

*Relaciones*:

offer (Offer): Oferta utilizada.
order (Order): Pedido en el que se aplicó la oferta.

**Modelo Comments**
Descripción: Representa un comentario hecho por un usuario.

*Campos*:

id (Int): Identificador único del comentario.
content (String): Contenido del comentario.
productId (Int): Identificador del producto asociado al comentario.
authorId (Int): Identificador del usuario que hizo el comentario.
createdAt (DateTime): Fecha y hora de creación del comentario. Predeterminado a la fecha y hora actual.

*Relaciones*:

product (Products): Producto asociado al comentario.
author (User): Usuario que hizo el comentario.

**Modelo Reviews**
Descripción: Representa una reseña hecha por un usuario sobre un producto.

*Campos*:

id (Int): Identificador único de la reseña.
content (String): Contenido de la reseña.
rating (Int): Calificación de la reseña (por ejemplo, de 1 a 5).
productId (Int): Identificador del producto asociado a la reseña.
authorId (Int): Identificador del usuario que escribió la reseña.
createdAt (DateTime): Fecha y hora de creación de la reseña. Predeterminado a la fecha y hora actual.

*Relaciones*:

product (Products): Producto asociado a la reseña.
author (User): Usuario que escribió la reseña.

**Modelo UserRole**
Descripción: Representa un rol asignado a un usuario.

*Campos*:

id (Int): Identificador único del rol.
role (String): Nombre del rol.
userId (Int): Identificador del usuario asociado al rol.

*Relaciones*:

user (User): Usuario asociado al rol.

**Modelo Order**
Descripción: Representa un pedido realizado por un usuario.

*Campos*:

id (Int): Identificador único del pedido.
userId (Int): Identificador del usuario que realizó el pedido.
totalAmount (Float): Monto total del pedido.
createdAt (DateTime): Fecha y hora de creación del pedido. Predeterminado a la fecha y hora actual.
shippingAddressId (Int): Identificador de la dirección de envío del pedido.

*Relaciones*:

user (User): Usuario que realizó el pedido.
orderItems (OrderItem[]): Artículos del pedido.
couponUsages (CouponUsage[]): Usos de cupones en el pedido.
offerUsages (OfferUsage[]): Usos de ofertas en el pedido.
shippingAddress (Address): Dirección de envío del pedido.

**Modelo OrderItem**
Descripción: Representa un artículo dentro de un pedido.

*Campos*:

id (Int): Identificador único del artículo del pedido.
orderId (Int): Identificador del pedido.
productId (Int): Identificador del producto.
quantity (Int): Cantidad del producto en el pedido.
price (Float): Precio del producto en el pedido.

*Relaciones*:

order (Order): Pedido al que pertenece el artículo.
product (Products): Producto del artículo.

**Modelo Coupon**
Descripción: Representa un cupón de descuento.

*Campos*:

id (Int): Identificador único del cupón.
code (String): Código único del cupón.
discountType (String): Tipo de descuento (por ejemplo, porcentaje o cantidad fija).
discountValue (Float): Valor del descuento.
minOrderAmount (Float?): Monto mínimo del pedido para aplicar el cupón (opcional).
startDate (DateTime): Fecha y hora de inicio del cupón.
endDate (DateTime): Fecha y hora de finalización del cupón.
usageLimit (Int?): Límite de usos del cupón (opcional).

*Relaciones*:

couponUsages (CouponUsage[]): Usos del cupón en pedidos.

**Modelo CouponUsage**
Descripción: Registra el uso de un cupón en un pedido específico.

*Campos*:

id (Int): Identificador único del uso del cupón.
couponId (Int): Identificador del cupón utilizado.
orderId (Int): Identificador del pedido donde se aplicó el cupón.
usedAt (DateTime): Fecha y hora en que se utilizó el cupón.

*Relaciones*:

coupon (Coupon): Cupón utilizado.
order (Order): Pedido en el que se aplicó el cupón.