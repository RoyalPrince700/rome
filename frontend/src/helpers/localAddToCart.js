import { toast } from 'react-toastify';

const STORAGE_KEY = 'romeLocalCartV1';

const dispatchChange = () => {
  window.dispatchEvent(new CustomEvent('romeLocalCartChange'));
};

export const getLocalCart = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const getLocalCartItemCount = () => {
  return getLocalCart().reduce((sum, line) => sum + (line.quantity || 0), 0);
};

const saveLocalCart = (items) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  dispatchChange();
};

export const updateLocalCartQuantity = (productId, quantity) => {
  const nextQuantity = Math.max(1, Number(quantity) || 1);
  const items = getLocalCart().map((line) =>
    String(line.productId) === String(productId) ? { ...line, quantity: nextQuantity } : line
  );
  saveLocalCart(items);
};

export const removeLocalCartItem = (productId) => {
  const items = getLocalCart().filter((line) => String(line.productId) !== String(productId));
  saveLocalCart(items);
};

/**
 * Demo / preview cart: stores items in localStorage only. Does not call the server.
 * The API-based addToCart in `addToCart.jsx` is unchanged; use this for local product grid UX only.
 */
const localAddToCart = (e, product) => {
  e?.stopPropagation();
  e?.preventDefault();

  if (!product?._id) {
    toast.error('Listing unavailable.');
    return;
  }

  const id = String(product._id);
  const cart = getLocalCart();
  const lineIndex = cart.findIndex((line) => String(line.productId) === id);

  if (lineIndex >= 0) {
    cart[lineIndex] = {
      ...cart[lineIndex],
      quantity: (cart[lineIndex].quantity || 1) + 1,
    };
  } else {
    cart.push({
      productId: id,
      quantity: 1,
      productName: product?.productName,
      category: product?.category,
      brandName: product?.brandName,
      productStatus: product?.productStatus,
      soldLabel: product?.soldLabel,
      sellingPrice: product?.sellingPrice,
      productImage: product?.productImage?.[0],
    });
  }

  saveLocalCart(cart);
  toast.success('Listing saved on this device');
};

export default localAddToCart;
