export function open(path: string) {
  return Deno.dlopen(path, {
    // atg___and__(int *, int, int)
    atg___and__: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg___and__tensor_(int *, int, int)
    atg___and__tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg___iand__(int *, int, int)
    atg___iand__: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg___iand__tensor_(int *, int, int)
    atg___iand__tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg___ilshift__(int *, int, int)
    atg___ilshift__: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg___ilshift__tensor_(int *, int, int)
    atg___ilshift__tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg___ior__(int *, int, int)
    atg___ior__: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg___ior__tensor_(int *, int, int)
    atg___ior__tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg___irshift__(int *, int, int)
    atg___irshift__: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg___irshift__tensor_(int *, int, int)
    atg___irshift__tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg___ixor__(int *, int, int)
    atg___ixor__: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg___ixor__tensor_(int *, int, int)
    atg___ixor__tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg___lshift__(int *, int, int)
    atg___lshift__: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg___lshift__scalar_out_(int *, int, int, int)
    atg___lshift__scalar_out_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg___lshift__tensor_(int *, int, int)
    atg___lshift__tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg___lshift__tensor_out_(int *, int, int, int)
    atg___lshift__tensor_out_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg___or__(int *, int, int)
    atg___or__: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg___or__tensor_(int *, int, int)
    atg___or__tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg___rshift__(int *, int, int)
    atg___rshift__: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg___rshift__scalar_out_(int *, int, int, int)
    atg___rshift__scalar_out_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg___rshift__tensor_(int *, int, int)
    atg___rshift__tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg___rshift__tensor_out_(int *, int, int, int)
    atg___rshift__tensor_out_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg___xor__(int *, int, int)
    atg___xor__: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg___xor__tensor_(int *, int, int)
    atg___xor__tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__adaptive_avg_pool2d(int *, int, int *, int)
    atg__adaptive_avg_pool2d: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__adaptive_avg_pool2d_backward(int *, int, int)
    atg__adaptive_avg_pool2d_backward: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__adaptive_avg_pool2d_backward_out(int *, int, int, int)
    atg__adaptive_avg_pool2d_backward_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__adaptive_avg_pool2d_out(int *, int, int, int *, int)
    atg__adaptive_avg_pool2d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__adaptive_avg_pool3d(int *, int, int *, int)
    atg__adaptive_avg_pool3d: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__adaptive_avg_pool3d_backward(int *, int, int)
    atg__adaptive_avg_pool3d_backward: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__adaptive_avg_pool3d_backward_out(int *, int, int, int)
    atg__adaptive_avg_pool3d_backward_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__adaptive_avg_pool3d_out(int *, int, int, int *, int)
    atg__adaptive_avg_pool3d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__add_batch_dim(int *, int, int, int)
    atg__add_batch_dim: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__add_relu(int *, int, int)
    atg__add_relu: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__add_relu_(int *, int, int)
    atg__add_relu_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__add_relu_out(int *, int, int, int)
    atg__add_relu_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__add_relu_scalar(int *, int, int)
    atg__add_relu_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__add_relu_scalar_(int *, int, int)
    atg__add_relu_scalar_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__add_relu_scalar_out(int *, int, int, int)
    atg__add_relu_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__addmm_activation(int *, int, int, int, int)
    atg__addmm_activation: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__addmm_activation_out(int *, int, int, int, int, int)
    atg__addmm_activation_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__aminmax(int *, int)
    atg__aminmax: { parameters: ["pointer", "i32"], result: "void" },
    // atg__aminmax_dim(int *, int, int, int)
    atg__aminmax_dim: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__aminmax_dim_out(int *, int, int, int, int, int)
    atg__aminmax_dim_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__aminmax_out(int *, int, int, int)
    atg__aminmax_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__amp_update_scale(int *, int, int, int, double, double, int)
    atg__amp_update_scale: { parameters: ["pointer", "i32", "i32", "i32", "f64", "f64", "i32"], result: "void" },
    // atg__amp_update_scale_(int *, int, int, int, double, double, int)
    atg__amp_update_scale_: { parameters: ["pointer", "i32", "i32", "i32", "f64", "f64", "i32"], result: "void" },
    // atg__amp_update_scale_out(int *, int, int, int, int, double, double, int)
    atg__amp_update_scale_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "f64", "f64", "i32"], result: "void" },
    // atg__assert_tensor_metadata(int, int *, int, int *, int, int)
    atg__assert_tensor_metadata: { parameters: ["i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__autocast_to_full_precision(int *, int, int, int)
    atg__autocast_to_full_precision: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__autocast_to_reduced_precision(int *, int, int, int, int, int)
    atg__autocast_to_reduced_precision: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__cast_byte(int *, int, int)
    atg__cast_byte: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__cast_char(int *, int, int)
    atg__cast_char: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__cast_double(int *, int, int)
    atg__cast_double: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__cast_float(int *, int, int)
    atg__cast_float: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__cast_half(int *, int, int)
    atg__cast_half: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__cast_int(int *, int, int)
    atg__cast_int: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__cast_long(int *, int, int)
    atg__cast_long: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__cast_short(int *, int, int)
    atg__cast_short: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__cdist_backward(int *, int, int, int, double, int)
    atg__cdist_backward: { parameters: ["pointer", "i32", "i32", "i32", "f64", "i32"], result: "void" },
    // atg__cdist_backward_out(int *, int, int, int, int, double, int)
    atg__cdist_backward_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "f64", "i32"], result: "void" },
    // atg__cholesky_solve_helper(int *, int, int, int)
    atg__cholesky_solve_helper: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__cholesky_solve_helper_out(int *, int, int, int, int)
    atg__cholesky_solve_helper_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__coalesce(int *, int)
    atg__coalesce: { parameters: ["pointer", "i32"], result: "void" },
    // atg__coalesce_out(int *, int, int)
    atg__coalesce_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__coalesced(int *, int, int)
    atg__coalesced: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__coalesced_(int *, int, int)
    atg__coalesced_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__coalesced_out(int *, int, int, int)
    atg__coalesced_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__compute_linear_combination(int *, int, int)
    atg__compute_linear_combination: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__compute_linear_combination_out(int *, int, int, int)
    atg__compute_linear_combination_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__conj(int *, int)
    atg__conj: { parameters: ["pointer", "i32"], result: "void" },
    // atg__conj_copy(int *, int)
    atg__conj_copy: { parameters: ["pointer", "i32"], result: "void" },
    // atg__conj_copy_out(int *, int, int)
    atg__conj_copy_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__conj_physical(int *, int)
    atg__conj_physical: { parameters: ["pointer", "i32"], result: "void" },
    // atg__conj_physical_out(int *, int, int)
    atg__conj_physical_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__conv_depthwise2d(int *, int, int, int *, int, int, int *, int, int *, int, int *, int)
    atg__conv_depthwise2d: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__conv_depthwise2d_out(int *, int, int, int, int *, int, int, int *, int, int *, int, int *, int)
    atg__conv_depthwise2d_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__convert_indices_from_coo_to_csr(int *, int, int, int)
    atg__convert_indices_from_coo_to_csr: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__convert_indices_from_coo_to_csr_out(int *, int, int, int, int)
    atg__convert_indices_from_coo_to_csr_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__convert_indices_from_csr_to_coo(int *, int, int, int, int)
    atg__convert_indices_from_csr_to_coo: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__convert_indices_from_csr_to_coo_out(int *, int, int, int, int, int)
    atg__convert_indices_from_csr_to_coo_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__convolution(int *, int, int, int, int *, int, int *, int, int *, int, int, int *, int, int, int, int, int, int)
    atg__convolution: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__convolution_deprecated(int *, int, int, int, int *, int, int *, int, int *, int, int, int *, int, int, int, int, int)
    atg__convolution_deprecated: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__convolution_mode(int *, int, int, int, int *, int, char *, int, int *, int, int)
    atg__convolution_mode: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__convolution_out(int *, int, int, int, int, int *, int, int *, int, int *, int, int, int *, int, int, int, int, int, int)
    atg__convolution_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__copy_from(int *, int, int, int)
    atg__copy_from: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__copy_from_and_resize(int *, int, int)
    atg__copy_from_and_resize: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__copy_from_and_resize_out(int *, int, int, int)
    atg__copy_from_and_resize_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__copy_from_out(int *, int, int, int, int)
    atg__copy_from_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__ctc_loss(int *, int, int, int *, int, int *, int, int, int)
    atg__ctc_loss: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__ctc_loss_backward(int *, int, int, int, int *, int, int *, int, int, int, int, int)
    atg__ctc_loss_backward: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__ctc_loss_backward_out(int *, int, int, int, int, int *, int, int *, int, int, int, int, int)
    atg__ctc_loss_backward_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__ctc_loss_backward_tensor(int *, int, int, int, int, int, int, int, int, int)
    atg__ctc_loss_backward_tensor: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__ctc_loss_out(int *, int, int, int, int, int *, int, int *, int, int, int)
    atg__ctc_loss_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__ctc_loss_tensor(int *, int, int, int, int, int, int)
    atg__ctc_loss_tensor: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__cudnn_ctc_loss(int *, int, int, int *, int, int *, int, int, int, int)
    atg__cudnn_ctc_loss: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__cudnn_ctc_loss_out(int *, int, int, int, int, int *, int, int *, int, int, int, int)
    atg__cudnn_ctc_loss_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__cudnn_ctc_loss_tensor(int *, int, int, int, int, int, int, int)
    atg__cudnn_ctc_loss_tensor: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__cudnn_init_dropout_state(int *, double, int, int, int, int)
    atg__cudnn_init_dropout_state: { parameters: ["pointer", "f64", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__cudnn_init_dropout_state_out(int *, int, double, int, int)
    atg__cudnn_init_dropout_state_out: { parameters: ["pointer", "i32", "f64", "i32", "i32"], result: "void" },
    // atg__cudnn_rnn(int *, int, int *, int, int, int, int, int, int, int, int, int, int, double, int, int, int *, int, int)
    atg__cudnn_rnn: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__cudnn_rnn_flatten_weight(int *, int *, int, int, int, int, int, int, int, int, int)
    atg__cudnn_rnn_flatten_weight: { parameters: ["pointer", "pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__cudnn_rnn_flatten_weight_out(int *, int, int *, int, int, int, int, int, int, int, int, int)
    atg__cudnn_rnn_flatten_weight_out: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__cudnn_rnn_out(int *, int, int, int, int, int, int, int *, int, int, int, int, int, int, int, int, int, int, double, int, int, int *, int, int)
    atg__cudnn_rnn_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__cufft_get_plan_cache_max_size(int)
    atg__cufft_get_plan_cache_max_size: { parameters: ["i32"], result: "i32" },
    // atg__cufft_get_plan_cache_size(int)
    atg__cufft_get_plan_cache_size: { parameters: ["i32"], result: "i32" },
    // atg__debug_has_internal_overlap(int)
    atg__debug_has_internal_overlap: { parameters: ["i32"], result: "i32" },
    // atg__dim_arange(int *, int, int)
    atg__dim_arange: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__dimi(int)
    atg__dimi: { parameters: ["i32"], result: "i32" },
    // atg__dimv(int)
    atg__dimv: { parameters: ["i32"], result: "i32" },
    // atg__dirichlet_grad(int *, int, int, int)
    atg__dirichlet_grad: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__dirichlet_grad_out(int *, int, int, int, int)
    atg__dirichlet_grad_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__efficientzerotensor(int *, int *, int, int, int)
    atg__efficientzerotensor: { parameters: ["pointer", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__efficientzerotensor_out(int *, int, int *, int)
    atg__efficientzerotensor_out: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__embedding_bag(int *, int, int, int, int, int, int, int, int, int)
    atg__embedding_bag: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__embedding_bag_backward(int *, int, int, int, int, int, int, int, int, int, int, int, int)
    atg__embedding_bag_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__embedding_bag_dense_backward(int *, int, int, int, int, int, int, int, int, int, int)
    atg__embedding_bag_dense_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__embedding_bag_dense_backward_out(int *, int, int, int, int, int, int, int, int, int, int, int)
    atg__embedding_bag_dense_backward_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__embedding_bag_forward_only(int *, int, int, int, int, int, int, int, int, int)
    atg__embedding_bag_forward_only: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__embedding_bag_forward_only_out(int *, int, int, int, int, int, int, int, int, int, int, int, int, int)
    atg__embedding_bag_forward_only_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__embedding_bag_out(int *, int, int, int, int, int, int, int, int, int, int, int, int, int)
    atg__embedding_bag_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__embedding_bag_per_sample_weights_backward(int *, int, int, int, int, int, int, int)
    atg__embedding_bag_per_sample_weights_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__embedding_bag_per_sample_weights_backward_out(int *, int, int, int, int, int, int, int, int)
    atg__embedding_bag_per_sample_weights_backward_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__embedding_bag_sparse_backward(int *, int, int, int, int, int, int, int, int, int, int)
    atg__embedding_bag_sparse_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__empty_affine_quantized(int *, int *, int, int, int, double, int)
    atg__empty_affine_quantized: { parameters: ["pointer", "pointer", "i32", "i32", "i32", "f64", "i32"], result: "void" },
    // atg__empty_affine_quantized_out(int *, int, int *, int, double, int)
    atg__empty_affine_quantized_out: { parameters: ["pointer", "i32", "pointer", "i32", "f64", "i32"], result: "void" },
    // atg__empty_per_channel_affine_quantized(int *, int *, int, int, int, int, int, int)
    atg__empty_per_channel_affine_quantized: { parameters: ["pointer", "pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__empty_per_channel_affine_quantized_out(int *, int, int *, int, int, int, int)
    atg__empty_per_channel_affine_quantized_out: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__euclidean_dist(int *, int, int)
    atg__euclidean_dist: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__euclidean_dist_out(int *, int, int, int)
    atg__euclidean_dist_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__fake_quantize_learnable_per_channel_affine(int *, int, int, int, int, int, int, double)
    atg__fake_quantize_learnable_per_channel_affine: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "f64"], result: "void" },
    // atg__fake_quantize_learnable_per_channel_affine_backward(int *, int, int, int, int, int, int, int, double)
    atg__fake_quantize_learnable_per_channel_affine_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64"], result: "void" },
    // atg__fake_quantize_learnable_per_channel_affine_out(int *, int, int, int, int, int, int, int, double)
    atg__fake_quantize_learnable_per_channel_affine_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64"], result: "void" },
    // atg__fake_quantize_learnable_per_tensor_affine(int *, int, int, int, int, int, double)
    atg__fake_quantize_learnable_per_tensor_affine: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "f64"], result: "void" },
    // atg__fake_quantize_learnable_per_tensor_affine_backward(int *, int, int, int, int, int, int, double)
    atg__fake_quantize_learnable_per_tensor_affine_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "f64"], result: "void" },
    // atg__fake_quantize_learnable_per_tensor_affine_out(int *, int, int, int, int, int, int, double)
    atg__fake_quantize_learnable_per_tensor_affine_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "f64"], result: "void" },
    // atg__fake_quantize_per_tensor_affine_cachemask_tensor_qparams(int *, int, int, int, int, int, int)
    atg__fake_quantize_per_tensor_affine_cachemask_tensor_qparams: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__fake_quantize_per_tensor_affine_cachemask_tensor_qparams_out(int *, int, int, int, int, int, int, int, int)
    atg__fake_quantize_per_tensor_affine_cachemask_tensor_qparams_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__fft_c2c(int *, int, int *, int, int, int)
    atg__fft_c2c: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__fft_c2c_out(int *, int, int, int *, int, int, int)
    atg__fft_c2c_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__fft_c2r(int *, int, int *, int, int, int)
    atg__fft_c2r: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__fft_c2r_out(int *, int, int, int *, int, int, int)
    atg__fft_c2r_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__fft_r2c(int *, int, int *, int, int, int)
    atg__fft_r2c: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__fft_r2c_out(int *, int, int, int *, int, int, int)
    atg__fft_r2c_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__flash_scaled_dot_product_attention(int *, int, int, int, int, int, int, int, double, int)
    atg__flash_scaled_dot_product_attention: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "i32"], result: "void" },
    // atg__foobar(int *, int, int, int, int)
    atg__foobar: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__foobar_out(int *, int, int, int, int, int)
    atg__foobar_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__fused_dropout(int *, int, double)
    atg__fused_dropout: { parameters: ["pointer", "i32", "f64"], result: "void" },
    // atg__fused_dropout_out(int *, int, int, int, double)
    atg__fused_dropout_out: { parameters: ["pointer", "i32", "i32", "i32", "f64"], result: "void" },
    // atg__fused_moving_avg_obs_fq_helper(int *, int, int, int, int, int, int, int, double, int, int, int, int, int)
    atg__fused_moving_avg_obs_fq_helper: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__fused_moving_avg_obs_fq_helper_functional(int *, int, int, int, int, int, int, int, double, int, int, int, int, int)
    atg__fused_moving_avg_obs_fq_helper_functional: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__fused_moving_avg_obs_fq_helper_out(int *, int, int, int, int, int, int, int, int, int, double, int, int, int, int, int)
    atg__fused_moving_avg_obs_fq_helper_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__fw_primal(int *, int, int)
    atg__fw_primal: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__fw_primal_copy(int *, int, int)
    atg__fw_primal_copy: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__fw_primal_copy_out(int *, int, int, int)
    atg__fw_primal_copy_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__gather_sparse_backward(int *, int, int, int, int)
    atg__gather_sparse_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__grid_sampler_2d_cpu_fallback(int *, int, int, int, int, int)
    atg__grid_sampler_2d_cpu_fallback: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__grid_sampler_2d_cpu_fallback_backward(int *, int, int, int, int, int, int)
    atg__grid_sampler_2d_cpu_fallback_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__grid_sampler_2d_cpu_fallback_out(int *, int, int, int, int, int, int)
    atg__grid_sampler_2d_cpu_fallback_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__has_compatible_shallow_copy_type(int, int)
    atg__has_compatible_shallow_copy_type: { parameters: ["i32", "i32"], result: "i32" },
    // atg__has_same_storage_numel(int, int)
    atg__has_same_storage_numel: { parameters: ["i32", "i32"], result: "i32" },
    // atg__histogramdd_bin_edges(int, int *, int, double *, int, int, int)
    atg__histogramdd_bin_edges: { parameters: ["i32", "pointer", "i32", "pointer", "i32", "i32", "i32"], result: "pointer" },
    // atg__histogramdd_bin_edges_out(int *, int, int, int *, int, double *, int, int, int)
    atg__histogramdd_bin_edges_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__histogramdd_from_bin_cts(int *, int, int *, int, double *, int, int, int)
    atg__histogramdd_from_bin_cts: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__histogramdd_from_bin_cts_out(int *, int, int, int *, int, double *, int, int, int)
    atg__histogramdd_from_bin_cts_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__histogramdd_from_bin_tensors(int *, int, int *, int, int, int)
    atg__histogramdd_from_bin_tensors: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__histogramdd_from_bin_tensors_out(int *, int, int, int *, int, int, int)
    atg__histogramdd_from_bin_tensors_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__index_put_impl(int *, int, int *, int, int, int, int)
    atg__index_put_impl: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__index_put_impl_(int *, int, int *, int, int, int, int)
    atg__index_put_impl_: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__index_put_impl_out(int *, int, int, int *, int, int, int, int)
    atg__index_put_impl_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__indices(int *, int)
    atg__indices: { parameters: ["pointer", "i32"], result: "void" },
    // atg__indices_copy(int *, int)
    atg__indices_copy: { parameters: ["pointer", "i32"], result: "void" },
    // atg__indices_copy_out(int *, int, int)
    atg__indices_copy_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__is_zerotensor(int)
    atg__is_zerotensor: { parameters: ["i32"], result: "i32" },
    // atg__linalg_check_errors(int, char *, int, int)
    atg__linalg_check_errors: { parameters: ["i32", "pointer", "i32", "i32"], result: "void" },
    // atg__linalg_det(int *, int)
    atg__linalg_det: { parameters: ["pointer", "i32"], result: "void" },
    // atg__linalg_det_result(int *, int, int, int, int)
    atg__linalg_det_result: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__linalg_eigh(int *, int, char *, int, int)
    atg__linalg_eigh: { parameters: ["pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__linalg_eigh_eigenvalues(int *, int, int, int, char *, int, int)
    atg__linalg_eigh_eigenvalues: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__linalg_slogdet(int *, int)
    atg__linalg_slogdet: { parameters: ["pointer", "i32"], result: "void" },
    // atg__linalg_slogdet_sign(int *, int, int, int, int, int)
    atg__linalg_slogdet_sign: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__linalg_solve_ex(int *, int, int, int, int)
    atg__linalg_solve_ex: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__linalg_solve_ex_result(int *, int, int, int, int, int, int, int, int)
    atg__linalg_solve_ex_result: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__linalg_svd(int *, int, int, int, char *, int)
    atg__linalg_svd: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__linalg_svd_u(int *, int, int, int, int, int, int, char *, int)
    atg__linalg_svd_u: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__log_softmax(int *, int, int, int)
    atg__log_softmax: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__log_softmax_backward_data(int *, int, int, int, int)
    atg__log_softmax_backward_data: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__log_softmax_backward_data_out(int *, int, int, int, int, int)
    atg__log_softmax_backward_data_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__log_softmax_out(int *, int, int, int, int)
    atg__log_softmax_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__logcumsumexp(int *, int, int)
    atg__logcumsumexp: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__logcumsumexp_out(int *, int, int, int)
    atg__logcumsumexp_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__lstm_mps(int *, int, int *, int, int *, int, int, int, double, int, int, int)
    atg__lstm_mps: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "f64", "i32", "i32", "i32"], result: "void" },
    // atg__lstm_mps_out(int *, int, int, int, int, int, int, int *, int, int *, int, int, int, double, int, int, int)
    atg__lstm_mps_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "f64", "i32", "i32", "i32"], result: "void" },
    // atg__lu_with_info(int *, int, int, int)
    atg__lu_with_info: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__make_dual(int *, int, int, int)
    atg__make_dual: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__make_dual_copy(int *, int, int, int)
    atg__make_dual_copy: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__make_dual_copy_out(int *, int, int, int, int)
    atg__make_dual_copy_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__make_per_channel_quantized_tensor(int *, int, int, int, int)
    atg__make_per_channel_quantized_tensor: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__make_per_channel_quantized_tensor_out(int *, int, int, int, int, int)
    atg__make_per_channel_quantized_tensor_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__make_per_tensor_quantized_tensor(int *, int, double, int)
    atg__make_per_tensor_quantized_tensor: { parameters: ["pointer", "i32", "f64", "i32"], result: "void" },
    // atg__make_per_tensor_quantized_tensor_out(int *, int, int, double, int)
    atg__make_per_tensor_quantized_tensor_out: { parameters: ["pointer", "i32", "i32", "f64", "i32"], result: "void" },
    // atg__masked_scale(int *, int, int, double)
    atg__masked_scale: { parameters: ["pointer", "i32", "i32", "f64"], result: "void" },
    // atg__masked_scale_out(int *, int, int, int, double)
    atg__masked_scale_out: { parameters: ["pointer", "i32", "i32", "i32", "f64"], result: "void" },
    // atg__masked_softmax(int *, int, int, int, int, int, int)
    atg__masked_softmax: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__masked_softmax_backward(int *, int, int, int, int, int)
    atg__masked_softmax_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__masked_softmax_backward_out(int *, int, int, int, int, int, int)
    atg__masked_softmax_backward_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__masked_softmax_out(int *, int, int, int, int, int, int, int)
    atg__masked_softmax_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__mkldnn_reshape(int *, int, int *, int)
    atg__mkldnn_reshape: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__mkldnn_reshape_out(int *, int, int, int *, int)
    atg__mkldnn_reshape_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__mkldnn_transpose(int *, int, int, int)
    atg__mkldnn_transpose: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__mkldnn_transpose_(int *, int, int, int)
    atg__mkldnn_transpose_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__mkldnn_transpose_out(int *, int, int, int, int)
    atg__mkldnn_transpose_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__mps_convolution(int *, int, int, int, int *, int, int *, int, int *, int, int)
    atg__mps_convolution: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__mps_convolution_out(int *, int, int, int, int, int *, int, int *, int, int *, int, int)
    atg__mps_convolution_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__mps_convolution_transpose(int *, int, int, int *, int, int *, int, int *, int, int *, int, int)
    atg__mps_convolution_transpose: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__mps_convolution_transpose_out(int *, int, int, int, int *, int, int *, int, int *, int, int *, int, int)
    atg__mps_convolution_transpose_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__mps_max_pool2d(int *, int, int *, int, int *, int, int *, int, int *, int, int)
    atg__mps_max_pool2d: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__mps_max_pool2d_out(int *, int, int, int *, int, int *, int, int *, int, int *, int, int)
    atg__mps_max_pool2d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__native_decoder_only_multi_head_attention(int *, int, int, int, int, int, int, int, int, int, int, int, int, int, int)
    atg__native_decoder_only_multi_head_attention: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__native_decoder_only_multi_head_attention_out(int *, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int)
    atg__native_decoder_only_multi_head_attention_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__native_multi_head_attention(int *, int, int, int, int, int, int, int, int, int, int, int, int, int, int)
    atg__native_multi_head_attention: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__native_multi_head_attention_out(int *, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int, int)
    atg__native_multi_head_attention_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__neg_view(int *, int)
    atg__neg_view: { parameters: ["pointer", "i32"], result: "void" },
    // atg__neg_view_copy(int *, int)
    atg__neg_view_copy: { parameters: ["pointer", "i32"], result: "void" },
    // atg__neg_view_copy_out(int *, int, int)
    atg__neg_view_copy_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__nested_from_padded(int *, int, int, int)
    atg__nested_from_padded: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__nested_from_padded_and_nested_example(int *, int, int)
    atg__nested_from_padded_and_nested_example: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__nested_from_padded_and_nested_example_out(int *, int, int, int)
    atg__nested_from_padded_and_nested_example_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__nested_from_padded_out(int *, int, int, int, int)
    atg__nested_from_padded_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__nested_select_backward(int *, int, int, int, int)
    atg__nested_select_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__nested_sum_backward(int *, int, int, int *, int, int)
    atg__nested_sum_backward: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__nested_view_from_buffer(int *, int, int, int, int *, int)
    atg__nested_view_from_buffer: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__nested_view_from_buffer_copy(int *, int, int, int, int *, int)
    atg__nested_view_from_buffer_copy: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__nested_view_from_buffer_copy_out(int *, int, int, int, int, int *, int)
    atg__nested_view_from_buffer_copy_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__new_zeros_with_same_feature_meta(int *, int, int, int)
    atg__new_zeros_with_same_feature_meta: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__new_zeros_with_same_feature_meta_out(int *, int, int, int, int)
    atg__new_zeros_with_same_feature_meta_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__nnpack_available()
    atg__nnpack_available: { parameters: [], result: "i32" },
    // atg__nnpack_spatial_convolution(int *, int, int, int, int *, int, int *, int)
    atg__nnpack_spatial_convolution: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__nnpack_spatial_convolution_out(int *, int, int, int, int, int *, int, int *, int)
    atg__nnpack_spatial_convolution_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__nnz(int)
    atg__nnz: { parameters: ["i32"], result: "i32" },
    // atg__pack_padded_sequence(int *, int, int, int)
    atg__pack_padded_sequence: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__pack_padded_sequence_backward(int *, int, int *, int, int, int)
    atg__pack_padded_sequence_backward: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__pack_padded_sequence_out(int *, int, int, int, int, int)
    atg__pack_padded_sequence_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__pad_circular(int *, int, int *, int)
    atg__pad_circular: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__pad_enum(int *, int, int *, int, int, double, int)
    atg__pad_enum: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "f64", "i32"], result: "void" },
    // atg__pad_packed_sequence(int *, int, int, int, int, int)
    atg__pad_packed_sequence: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__pdist_backward(int *, int, int, double, int)
    atg__pdist_backward: { parameters: ["pointer", "i32", "i32", "f64", "i32"], result: "void" },
    // atg__pdist_backward_out(int *, int, int, int, double, int)
    atg__pdist_backward_out: { parameters: ["pointer", "i32", "i32", "i32", "f64", "i32"], result: "void" },
    // atg__pin_memory(int *, int, int)
    atg__pin_memory: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__pin_memory_out(int *, int, int, int)
    atg__pin_memory_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__remove_batch_dim(int *, int, int, int, int)
    atg__remove_batch_dim: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__reshape_alias(int *, int, int *, int, int *, int)
    atg__reshape_alias: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__reshape_alias_copy(int *, int, int *, int, int *, int)
    atg__reshape_alias_copy: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__reshape_alias_copy_out(int *, int, int, int *, int, int *, int)
    atg__reshape_alias_copy_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__reshape_from_tensor(int *, int, int)
    atg__reshape_from_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__resize_output(int *, int, int *, int, int)
    atg__resize_output: { parameters: ["pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__resize_output_(int *, int, int *, int, int)
    atg__resize_output_: { parameters: ["pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__resize_output_out(int *, int, int, int *, int, int)
    atg__resize_output_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__rowwise_prune(int *, int, int, int)
    atg__rowwise_prune: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__sample_dirichlet(int *, int)
    atg__sample_dirichlet: { parameters: ["pointer", "i32"], result: "void" },
    // atg__sample_dirichlet_out(int *, int, int)
    atg__sample_dirichlet_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__saturate_weight_to_fp16(int *, int)
    atg__saturate_weight_to_fp16: { parameters: ["pointer", "i32"], result: "void" },
    // atg__scaled_dot_product_attention(int *, int, int, int, int, double, int, int)
    atg__scaled_dot_product_attention: { parameters: ["pointer", "i32", "i32", "i32", "i32", "f64", "i32", "i32"], result: "void" },
    // atg__scaled_dot_product_attention_math(int *, int, int, int, int, double, int, int)
    atg__scaled_dot_product_attention_math: { parameters: ["pointer", "i32", "i32", "i32", "i32", "f64", "i32", "i32"], result: "void" },
    // atg__scatter_reduce(int *, int, int, int, int, char *, int, int)
    atg__scatter_reduce: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__scatter_reduce_(int *, int, int, int, int, char *, int, int)
    atg__scatter_reduce_: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__scatter_reduce_two_out(int *, int, int, int, int, int, char *, int, int)
    atg__scatter_reduce_two_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__segment_reduce_backward(int *, int, int, int, char *, int, int, int, int, int)
    atg__segment_reduce_backward: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__segment_reduce_backward_out(int *, int, int, int, int, char *, int, int, int, int, int)
    atg__segment_reduce_backward_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__shape_as_tensor(int *, int)
    atg__shape_as_tensor: { parameters: ["pointer", "i32"], result: "void" },
    // atg__slow_conv2d_backward(int *, int, int, int, int, int, int, int *, int, int *, int, int *, int)
    atg__slow_conv2d_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__sobol_engine_draw(int *, int, int, int, int, int, int)
    atg__sobol_engine_draw: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__sobol_engine_ff_(int *, int, int, int, int, int)
    atg__sobol_engine_ff_: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__sobol_engine_initialize_state_(int *, int, int)
    atg__sobol_engine_initialize_state_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__sobol_engine_scramble_(int *, int, int, int)
    atg__sobol_engine_scramble_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__softmax(int *, int, int, int)
    atg__softmax: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__softmax_backward_data(int *, int, int, int, int)
    atg__softmax_backward_data: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__softmax_backward_data_out(int *, int, int, int, int, int)
    atg__softmax_backward_data_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__softmax_out(int *, int, int, int, int)
    atg__softmax_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_addmm(int *, int, int, int)
    atg__sparse_addmm: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_addmm_out(int *, int, int, int, int)
    atg__sparse_addmm_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_broadcast_to(int *, int, int *, int)
    atg__sparse_broadcast_to: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__sparse_broadcast_to_copy(int *, int, int *, int)
    atg__sparse_broadcast_to_copy: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__sparse_broadcast_to_copy_out(int *, int, int, int *, int)
    atg__sparse_broadcast_to_copy_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__sparse_bsc_tensor_unsafe(int *, int, int, int, int *, int, int, int)
    atg__sparse_bsc_tensor_unsafe: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_bsr_tensor_unsafe(int *, int, int, int, int *, int, int, int)
    atg__sparse_bsr_tensor_unsafe: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_compressed_tensor_unsafe(int *, int, int, int, int *, int, int, int)
    atg__sparse_compressed_tensor_unsafe: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_coo_tensor_unsafe(int *, int, int, int *, int, int, int)
    atg__sparse_coo_tensor_unsafe: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_coo_tensor_with_dims(int *, int, int, int *, int, int, int)
    atg__sparse_coo_tensor_with_dims: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_coo_tensor_with_dims_and_tensors(int *, int, int, int *, int, int, int, int, int)
    atg__sparse_coo_tensor_with_dims_and_tensors: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_coo_tensor_with_dims_and_tensors_out(int *, int, int, int, int *, int, int, int)
    atg__sparse_coo_tensor_with_dims_and_tensors_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_coo_tensor_with_dims_out(int *, int, int, int, int *, int)
    atg__sparse_coo_tensor_with_dims_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__sparse_csc_tensor_unsafe(int *, int, int, int, int *, int, int, int)
    atg__sparse_csc_tensor_unsafe: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_csr_prod(int *, int, int *, int, int, int)
    atg__sparse_csr_prod: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_csr_prod_dim_dtype_out(int *, int, int, int *, int, int, int)
    atg__sparse_csr_prod_dim_dtype_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_csr_sum(int *, int, int *, int, int, int)
    atg__sparse_csr_sum: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_csr_sum_dim_dtype_out(int *, int, int, int *, int, int, int)
    atg__sparse_csr_sum_dim_dtype_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_csr_tensor_unsafe(int *, int, int, int, int *, int, int, int)
    atg__sparse_csr_tensor_unsafe: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_log_softmax(int *, int, int, int)
    atg__sparse_log_softmax: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_log_softmax_backward_data(int *, int, int, int, int)
    atg__sparse_log_softmax_backward_data: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_log_softmax_backward_data_out(int *, int, int, int, int, int)
    atg__sparse_log_softmax_backward_data_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_log_softmax_int(int *, int, int, int)
    atg__sparse_log_softmax_int: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_log_softmax_out(int *, int, int, int, int)
    atg__sparse_log_softmax_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_mask_helper(int *, int, int)
    atg__sparse_mask_helper: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__sparse_mask_helper_out(int *, int, int, int)
    atg__sparse_mask_helper_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_mm(int *, int, int)
    atg__sparse_mm: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__sparse_softmax(int *, int, int, int)
    atg__sparse_softmax: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_softmax_backward_data(int *, int, int, int, int)
    atg__sparse_softmax_backward_data: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_softmax_backward_data_out(int *, int, int, int, int, int)
    atg__sparse_softmax_backward_data_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_softmax_int(int *, int, int, int)
    atg__sparse_softmax_int: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_softmax_out(int *, int, int, int, int)
    atg__sparse_softmax_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_sparse_matmul(int *, int, int)
    atg__sparse_sparse_matmul: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__sparse_sparse_matmul_out(int *, int, int, int)
    atg__sparse_sparse_matmul_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__sparse_sum(int *, int)
    atg__sparse_sum: { parameters: ["pointer", "i32"], result: "void" },
    // atg__sparse_sum_backward(int *, int, int, int *, int)
    atg__sparse_sum_backward: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__sparse_sum_backward_out(int *, int, int, int, int *, int)
    atg__sparse_sum_backward_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__sparse_sum_dim(int *, int, int *, int)
    atg__sparse_sum_dim: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__sparse_sum_dim_dtype(int *, int, int *, int, int)
    atg__sparse_sum_dim_dtype: { parameters: ["pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__sparse_sum_dim_out(int *, int, int, int *, int)
    atg__sparse_sum_dim_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__sparse_sum_dtype(int *, int, int)
    atg__sparse_sum_dtype: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__spdiags(int *, int, int, int *, int)
    atg__spdiags: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__spdiags_out(int *, int, int, int, int *, int)
    atg__spdiags_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__stack(int *, int *, int, int)
    atg__stack: { parameters: ["pointer", "pointer", "i32", "i32"], result: "void" },
    // atg__stack_out(int *, int, int *, int, int)
    atg__stack_out: { parameters: ["pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__standard_gamma(int *, int)
    atg__standard_gamma: { parameters: ["pointer", "i32"], result: "void" },
    // atg__standard_gamma_grad(int *, int, int)
    atg__standard_gamma_grad: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__standard_gamma_grad_out(int *, int, int, int)
    atg__standard_gamma_grad_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__standard_gamma_out(int *, int, int)
    atg__standard_gamma_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__symeig_helper(int *, int, int, int)
    atg__symeig_helper: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__symeig_helper_out(int *, int, int, int, int, int)
    atg__symeig_helper_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__test_ambiguous_defaults(int *, int, int, int)
    atg__test_ambiguous_defaults: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__test_ambiguous_defaults_b(int *, int, int, char *, int)
    atg__test_ambiguous_defaults_b: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__test_autograd_multiple_dispatch(int *, int)
    atg__test_autograd_multiple_dispatch: { parameters: ["pointer", "i32"], result: "void" },
    // atg__test_autograd_multiple_dispatch_fullcoverage_out(int *, int, int)
    atg__test_autograd_multiple_dispatch_fullcoverage_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__test_autograd_multiple_dispatch_ntonly(int *, int, int)
    atg__test_autograd_multiple_dispatch_ntonly: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__test_autograd_multiple_dispatch_view(int *, int)
    atg__test_autograd_multiple_dispatch_view: { parameters: ["pointer", "i32"], result: "void" },
    // atg__test_autograd_multiple_dispatch_view_copy(int *, int)
    atg__test_autograd_multiple_dispatch_view_copy: { parameters: ["pointer", "i32"], result: "void" },
    // atg__test_autograd_multiple_dispatch_view_copy_out(int *, int, int)
    atg__test_autograd_multiple_dispatch_view_copy_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__test_optional_filled_intlist(int *, int, int *, int)
    atg__test_optional_filled_intlist: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__test_optional_filled_intlist_out(int *, int, int, int *, int)
    atg__test_optional_filled_intlist_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__test_optional_floatlist(int *, int, double *, int)
    atg__test_optional_floatlist: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__test_optional_floatlist_out(int *, int, int, double *, int)
    atg__test_optional_floatlist_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__test_optional_intlist(int *, int, int *, int)
    atg__test_optional_intlist: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__test_optional_intlist_out(int *, int, int, int *, int)
    atg__test_optional_intlist_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__test_serialization_subcmul(int *, int, int)
    atg__test_serialization_subcmul: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__test_string_default(int *, int, char *, int, char *, int)
    atg__test_string_default: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__test_warn_in_autograd(int *, int)
    atg__test_warn_in_autograd: { parameters: ["pointer", "i32"], result: "void" },
    // atg__test_warn_in_autograd_out(int *, int, int)
    atg__test_warn_in_autograd_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__to_copy(int *, int, int, int, int)
    atg__to_copy: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__to_copy_out(int *, int, int, int)
    atg__to_copy_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__to_cpu(int *, int)
    atg__to_cpu: { parameters: ["pointer", "i32"], result: "pointer" },
    // atg__to_dense(int *, int, int)
    atg__to_dense: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__to_dense_out(int *, int, int, int)
    atg__to_dense_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__torch_cuda_cu_linker_symbol_op(int *, int)
    atg__torch_cuda_cu_linker_symbol_op: { parameters: ["pointer", "i32"], result: "void" },
    // atg__torch_cuda_cu_linker_symbol_op_out(int *, int, int)
    atg__torch_cuda_cu_linker_symbol_op_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__transform_bias_rescale_qkv(int *, int, int, int)
    atg__transform_bias_rescale_qkv: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__transform_bias_rescale_qkv_out(int *, int, int, int, int, int, int)
    atg__transform_bias_rescale_qkv_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__transformer_decoder_only_layer_fwd(int *, int, int, int, int, int, int, int, int, int, double, int, int, int, int, int, int, int, int, int, int, int)
    atg__transformer_decoder_only_layer_fwd: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__transformer_decoder_only_layer_fwd_out(int *, int, int, int, int, int, int, int, int, int, int, int, int, double, int, int, int, int, int, int, int, int, int, int, int)
    atg__transformer_decoder_only_layer_fwd_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__transformer_encoder_layer_fwd(int *, int, int, int, int, int, int, int, int, int, double, int, int, int, int, int, int, int, int, int, int, int)
    atg__transformer_encoder_layer_fwd: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__transformer_encoder_layer_fwd_out(int *, int, int, int, int, int, int, int, int, int, int, double, int, int, int, int, int, int, int, int, int, int, int)
    atg__transformer_encoder_layer_fwd_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__trilinear(int *, int, int, int, int *, int, int *, int, int *, int, int *, int, int)
    atg__trilinear: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__trilinear_out(int *, int, int, int, int, int *, int, int *, int, int *, int, int *, int, int)
    atg__trilinear_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg__triton_multi_head_attention(int *, int, int, int, int, int, int, int, int, int, int)
    atg__triton_multi_head_attention: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__triton_multi_head_attention_out(int *, int, int, int, int, int, int, int, int, int, int, int)
    atg__triton_multi_head_attention_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__triton_scaled_dot_attention(int *, int, int, int, double)
    atg__triton_scaled_dot_attention: { parameters: ["pointer", "i32", "i32", "i32", "f64"], result: "void" },
    // atg__triton_scaled_dot_attention_out(int *, int, int, int, int, double)
    atg__triton_scaled_dot_attention_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "f64"], result: "void" },
    // atg__unique(int *, int, int, int)
    atg__unique: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__unique2(int *, int, int, int, int)
    atg__unique2: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__unique2_out(int *, int, int, int, int, int, int, int)
    atg__unique2_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__unique_out(int *, int, int, int, int, int)
    atg__unique_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__unpack_dual(int *, int, int)
    atg__unpack_dual: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__unsafe_view(int *, int, int *, int)
    atg__unsafe_view: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__unsafe_view_out(int *, int, int, int *, int)
    atg__unsafe_view_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__upsample_bicubic2d_aa(int *, int, int *, int, int, double, int, double, int)
    atg__upsample_bicubic2d_aa: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg__upsample_bicubic2d_aa_backward(int *, int, int *, int, int *, int, int, double, int, double, int)
    atg__upsample_bicubic2d_aa_backward: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg__upsample_bicubic2d_aa_backward_grad_input(int *, int, int, int *, int, int *, int, int, double, int, double, int)
    atg__upsample_bicubic2d_aa_backward_grad_input: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg__upsample_bicubic2d_aa_backward_vec(int *, int, int *, int, int *, int, int, double *, int)
    atg__upsample_bicubic2d_aa_backward_vec: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__upsample_bicubic2d_aa_backward_vec_out(int *, int, int, int *, int, int *, int, int, double *, int)
    atg__upsample_bicubic2d_aa_backward_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__upsample_bicubic2d_aa_out(int *, int, int, int *, int, int, double, int, double, int)
    atg__upsample_bicubic2d_aa_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg__upsample_bicubic2d_aa_vec(int *, int, int *, int, int, double *, int)
    atg__upsample_bicubic2d_aa_vec: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__upsample_bicubic2d_aa_vec_out(int *, int, int, int *, int, int, double *, int)
    atg__upsample_bicubic2d_aa_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__upsample_bilinear2d_aa(int *, int, int *, int, int, double, int, double, int)
    atg__upsample_bilinear2d_aa: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg__upsample_bilinear2d_aa_backward(int *, int, int *, int, int *, int, int, double, int, double, int)
    atg__upsample_bilinear2d_aa_backward: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg__upsample_bilinear2d_aa_backward_grad_input(int *, int, int, int *, int, int *, int, int, double, int, double, int)
    atg__upsample_bilinear2d_aa_backward_grad_input: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg__upsample_bilinear2d_aa_backward_vec(int *, int, int *, int, int *, int, int, double *, int)
    atg__upsample_bilinear2d_aa_backward_vec: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__upsample_bilinear2d_aa_backward_vec_out(int *, int, int, int *, int, int *, int, int, double *, int)
    atg__upsample_bilinear2d_aa_backward_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__upsample_bilinear2d_aa_out(int *, int, int, int *, int, int, double, int, double, int)
    atg__upsample_bilinear2d_aa_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg__upsample_bilinear2d_aa_vec(int *, int, int *, int, int, double *, int)
    atg__upsample_bilinear2d_aa_vec: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__upsample_bilinear2d_aa_vec_out(int *, int, int, int *, int, int, double *, int)
    atg__upsample_bilinear2d_aa_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__upsample_nearest_exact1d(int *, int, int *, int, double, int)
    atg__upsample_nearest_exact1d: { parameters: ["pointer", "i32", "pointer", "i32", "f64", "i32"], result: "void" },
    // atg__upsample_nearest_exact1d_backward(int *, int, int *, int, int *, int, double, int)
    atg__upsample_nearest_exact1d_backward: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "f64", "i32"], result: "void" },
    // atg__upsample_nearest_exact1d_backward_grad_input(int *, int, int, int *, int, int *, int, double, int)
    atg__upsample_nearest_exact1d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "f64", "i32"], result: "void" },
    // atg__upsample_nearest_exact1d_backward_vec(int *, int, int *, int, int *, int, double *, int)
    atg__upsample_nearest_exact1d_backward_vec: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__upsample_nearest_exact1d_backward_vec_out(int *, int, int, int *, int, int *, int, double *, int)
    atg__upsample_nearest_exact1d_backward_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__upsample_nearest_exact1d_out(int *, int, int, int *, int, double, int)
    atg__upsample_nearest_exact1d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "f64", "i32"], result: "void" },
    // atg__upsample_nearest_exact1d_vec(int *, int, int *, int, double *, int)
    atg__upsample_nearest_exact1d_vec: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__upsample_nearest_exact1d_vec_out(int *, int, int, int *, int, double *, int)
    atg__upsample_nearest_exact1d_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__upsample_nearest_exact2d(int *, int, int *, int, double, int, double, int)
    atg__upsample_nearest_exact2d: { parameters: ["pointer", "i32", "pointer", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg__upsample_nearest_exact2d_backward(int *, int, int *, int, int *, int, double, int, double, int)
    atg__upsample_nearest_exact2d_backward: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg__upsample_nearest_exact2d_backward_grad_input(int *, int, int, int *, int, int *, int, double, int, double, int)
    atg__upsample_nearest_exact2d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg__upsample_nearest_exact2d_backward_vec(int *, int, int *, int, int *, int, double *, int)
    atg__upsample_nearest_exact2d_backward_vec: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__upsample_nearest_exact2d_backward_vec_out(int *, int, int, int *, int, int *, int, double *, int)
    atg__upsample_nearest_exact2d_backward_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__upsample_nearest_exact2d_out(int *, int, int, int *, int, double, int, double, int)
    atg__upsample_nearest_exact2d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg__upsample_nearest_exact2d_vec(int *, int, int *, int, double *, int)
    atg__upsample_nearest_exact2d_vec: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__upsample_nearest_exact2d_vec_out(int *, int, int, int *, int, double *, int)
    atg__upsample_nearest_exact2d_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__upsample_nearest_exact3d(int *, int, int *, int, double, int, double, int, double, int)
    atg__upsample_nearest_exact3d: { parameters: ["pointer", "i32", "pointer", "i32", "f64", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg__upsample_nearest_exact3d_backward(int *, int, int *, int, int *, int, double, int, double, int, double, int)
    atg__upsample_nearest_exact3d_backward: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "f64", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg__upsample_nearest_exact3d_backward_grad_input(int *, int, int, int *, int, int *, int, double, int, double, int, double, int)
    atg__upsample_nearest_exact3d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "f64", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg__upsample_nearest_exact3d_backward_vec(int *, int, int *, int, int *, int, double *, int)
    atg__upsample_nearest_exact3d_backward_vec: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__upsample_nearest_exact3d_backward_vec_out(int *, int, int, int *, int, int *, int, double *, int)
    atg__upsample_nearest_exact3d_backward_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__upsample_nearest_exact3d_out(int *, int, int, int *, int, double, int, double, int, double, int)
    atg__upsample_nearest_exact3d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "f64", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg__upsample_nearest_exact3d_vec(int *, int, int *, int, double *, int)
    atg__upsample_nearest_exact3d_vec: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__upsample_nearest_exact3d_vec_out(int *, int, int, int *, int, double *, int)
    atg__upsample_nearest_exact3d_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg__use_cudnn_ctc_loss(int, int, int *, int, int *, int, int)
    atg__use_cudnn_ctc_loss: { parameters: ["i32", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "i32" },
    // atg__use_cudnn_ctc_loss_tensor(int, int, int, int, int)
    atg__use_cudnn_ctc_loss_tensor: { parameters: ["i32", "i32", "i32", "i32", "i32"], result: "i32" },
    // atg__use_cudnn_rnn_flatten_weight()
    atg__use_cudnn_rnn_flatten_weight: { parameters: [], result: "i32" },
    // atg__validate_compressed_sparse_indices(int, int, int, int, int, int)
    atg__validate_compressed_sparse_indices: { parameters: ["i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__validate_sparse_bsc_tensor_args(int, int, int, int *, int)
    atg__validate_sparse_bsc_tensor_args: { parameters: ["i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__validate_sparse_bsr_tensor_args(int, int, int, int *, int)
    atg__validate_sparse_bsr_tensor_args: { parameters: ["i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__validate_sparse_csc_tensor_args(int, int, int, int *, int)
    atg__validate_sparse_csc_tensor_args: { parameters: ["i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__validate_sparse_csr_tensor_args(int, int, int, int *, int)
    atg__validate_sparse_csr_tensor_args: { parameters: ["i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg__values(int *, int)
    atg__values: { parameters: ["pointer", "i32"], result: "void" },
    // atg__values_copy(int *, int)
    atg__values_copy: { parameters: ["pointer", "i32"], result: "void" },
    // atg__values_copy_out(int *, int, int)
    atg__values_copy_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg__version(int)
    atg__version: { parameters: ["i32"], result: "i32" },
    // atg__weight_norm(int *, int, int, int)
    atg__weight_norm: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__weight_norm_differentiable_backward(int *, int, int, int, int, int)
    atg__weight_norm_differentiable_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__weight_norm_interface(int *, int, int, int)
    atg__weight_norm_interface: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg__weight_norm_interface_backward(int *, int, int, int, int, int)
    atg__weight_norm_interface_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__weight_norm_interface_backward_out(int *, int, int, int, int, int, int, int)
    atg__weight_norm_interface_backward_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg__weight_norm_interface_out(int *, int, int, int, int, int)
    atg__weight_norm_interface_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_abs(int *, int)
    atg_abs: { parameters: ["pointer", "i32"], result: "void" },
    // atg_abs_(int *, int)
    atg_abs_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_abs_out(int *, int, int)
    atg_abs_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_absolute(int *, int)
    atg_absolute: { parameters: ["pointer", "i32"], result: "void" },
    // atg_absolute_(int *, int)
    atg_absolute_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_absolute_out(int *, int, int)
    atg_absolute_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_acos(int *, int)
    atg_acos: { parameters: ["pointer", "i32"], result: "void" },
    // atg_acos_(int *, int)
    atg_acos_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_acos_out(int *, int, int)
    atg_acos_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_acosh(int *, int)
    atg_acosh: { parameters: ["pointer", "i32"], result: "void" },
    // atg_acosh_(int *, int)
    atg_acosh_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_acosh_out(int *, int, int)
    atg_acosh_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_adaptive_avg_pool1d(int *, int, int *, int)
    atg_adaptive_avg_pool1d: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_adaptive_avg_pool2d(int *, int, int *, int)
    atg_adaptive_avg_pool2d: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_adaptive_avg_pool2d_out(int *, int, int, int *, int)
    atg_adaptive_avg_pool2d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_adaptive_avg_pool3d(int *, int, int *, int)
    atg_adaptive_avg_pool3d: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_adaptive_avg_pool3d_backward(int *, int, int, int)
    atg_adaptive_avg_pool3d_backward: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_adaptive_avg_pool3d_out(int *, int, int, int *, int)
    atg_adaptive_avg_pool3d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_adaptive_max_pool1d(int *, int, int *, int)
    atg_adaptive_max_pool1d: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_adaptive_max_pool2d(int *, int, int *, int)
    atg_adaptive_max_pool2d: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_adaptive_max_pool2d_backward(int *, int, int, int)
    atg_adaptive_max_pool2d_backward: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_adaptive_max_pool2d_backward_grad_input(int *, int, int, int, int)
    atg_adaptive_max_pool2d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_adaptive_max_pool2d_out(int *, int, int, int, int *, int)
    atg_adaptive_max_pool2d_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_adaptive_max_pool3d(int *, int, int *, int)
    atg_adaptive_max_pool3d: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_adaptive_max_pool3d_backward(int *, int, int, int)
    atg_adaptive_max_pool3d_backward: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_adaptive_max_pool3d_backward_grad_input(int *, int, int, int, int)
    atg_adaptive_max_pool3d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_adaptive_max_pool3d_out(int *, int, int, int, int *, int)
    atg_adaptive_max_pool3d_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_add(int *, int, int)
    atg_add: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_add_(int *, int, int)
    atg_add_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_add_out(int *, int, int, int)
    atg_add_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_add_scalar(int *, int, int)
    atg_add_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_add_scalar_(int *, int, int)
    atg_add_scalar_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_add_scalar_out(int *, int, int, int)
    atg_add_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_addbmm(int *, int, int, int)
    atg_addbmm: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_addbmm_(int *, int, int, int)
    atg_addbmm_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_addbmm_out(int *, int, int, int, int)
    atg_addbmm_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_addcdiv(int *, int, int, int)
    atg_addcdiv: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_addcdiv_(int *, int, int, int)
    atg_addcdiv_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_addcdiv_out(int *, int, int, int, int)
    atg_addcdiv_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_addcmul(int *, int, int, int)
    atg_addcmul: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_addcmul_(int *, int, int, int)
    atg_addcmul_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_addcmul_out(int *, int, int, int, int)
    atg_addcmul_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_addmm(int *, int, int, int)
    atg_addmm: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_addmm_(int *, int, int, int)
    atg_addmm_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_addmm_out(int *, int, int, int, int)
    atg_addmm_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_addmv(int *, int, int, int)
    atg_addmv: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_addmv_(int *, int, int, int)
    atg_addmv_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_addmv_out(int *, int, int, int, int)
    atg_addmv_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_addr(int *, int, int, int)
    atg_addr: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_addr_(int *, int, int, int)
    atg_addr_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_addr_out(int *, int, int, int, int)
    atg_addr_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_adjoint(int *, int)
    atg_adjoint: { parameters: ["pointer", "i32"], result: "void" },
    // atg_affine_grid_generator(int *, int, int *, int, int)
    atg_affine_grid_generator: { parameters: ["pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_affine_grid_generator_backward(int *, int, int *, int, int)
    atg_affine_grid_generator_backward: { parameters: ["pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_affine_grid_generator_out(int *, int, int, int *, int, int)
    atg_affine_grid_generator_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_alias(int *, int)
    atg_alias: { parameters: ["pointer", "i32"], result: "void" },
    // atg_alias_copy(int *, int)
    atg_alias_copy: { parameters: ["pointer", "i32"], result: "void" },
    // atg_alias_copy_out(int *, int, int)
    atg_alias_copy_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_align_as(int *, int, int)
    atg_align_as: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_align_tensors(int *, int)
    atg_align_tensors: { parameters: ["pointer", "i32"], result: "pointer" },
    // atg_all(int *, int)
    atg_all: { parameters: ["pointer", "i32"], result: "void" },
    // atg_all_all_out(int *, int, int)
    atg_all_all_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_all_dim(int *, int, int, int)
    atg_all_dim: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_all_out(int *, int, int, int, int)
    atg_all_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_allclose(int, int, double, double, int)
    atg_allclose: { parameters: ["i32", "i32", "f64", "f64", "i32"], result: "i32" },
    // atg_alpha_dropout(int *, int, double, int)
    atg_alpha_dropout: { parameters: ["pointer", "i32", "f64", "i32"], result: "void" },
    // atg_alpha_dropout_(int *, int, double, int)
    atg_alpha_dropout_: { parameters: ["pointer", "i32", "f64", "i32"], result: "void" },
    // atg_amax(int *, int, int *, int, int)
    atg_amax: { parameters: ["pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_amax_out(int *, int, int, int *, int, int)
    atg_amax_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_amin(int *, int, int *, int, int)
    atg_amin: { parameters: ["pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_amin_out(int *, int, int, int *, int, int)
    atg_amin_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_aminmax(int *, int, int, int, int)
    atg_aminmax: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_aminmax_out(int *, int, int, int, int, int, int)
    atg_aminmax_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_angle(int *, int)
    atg_angle: { parameters: ["pointer", "i32"], result: "void" },
    // atg_angle_out(int *, int, int)
    atg_angle_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_any(int *, int)
    atg_any: { parameters: ["pointer", "i32"], result: "void" },
    // atg_any_all_out(int *, int, int)
    atg_any_all_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_any_dim(int *, int, int, int)
    atg_any_dim: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_any_out(int *, int, int, int, int)
    atg_any_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_arange(int *, int, int, int)
    atg_arange: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_arange_start(int *, int, int, int, int)
    atg_arange_start: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_arange_start_step(int *, int, int, int, int, int)
    atg_arange_start_step: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_arccos(int *, int)
    atg_arccos: { parameters: ["pointer", "i32"], result: "void" },
    // atg_arccos_(int *, int)
    atg_arccos_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_arccos_out(int *, int, int)
    atg_arccos_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_arccosh(int *, int)
    atg_arccosh: { parameters: ["pointer", "i32"], result: "void" },
    // atg_arccosh_(int *, int)
    atg_arccosh_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_arccosh_out(int *, int, int)
    atg_arccosh_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_arcsin(int *, int)
    atg_arcsin: { parameters: ["pointer", "i32"], result: "void" },
    // atg_arcsin_(int *, int)
    atg_arcsin_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_arcsin_out(int *, int, int)
    atg_arcsin_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_arcsinh(int *, int)
    atg_arcsinh: { parameters: ["pointer", "i32"], result: "void" },
    // atg_arcsinh_(int *, int)
    atg_arcsinh_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_arcsinh_out(int *, int, int)
    atg_arcsinh_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_arctan(int *, int)
    atg_arctan: { parameters: ["pointer", "i32"], result: "void" },
    // atg_arctan2(int *, int, int)
    atg_arctan2: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_arctan2_(int *, int, int)
    atg_arctan2_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_arctan2_out(int *, int, int, int)
    atg_arctan2_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_arctan_(int *, int)
    atg_arctan_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_arctan_out(int *, int, int)
    atg_arctan_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_arctanh(int *, int)
    atg_arctanh: { parameters: ["pointer", "i32"], result: "void" },
    // atg_arctanh_(int *, int)
    atg_arctanh_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_arctanh_out(int *, int, int)
    atg_arctanh_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_argmax(int *, int, int, int, int)
    atg_argmax: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_argmax_out(int *, int, int, int, int, int)
    atg_argmax_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_argmin(int *, int, int, int, int)
    atg_argmin: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_argmin_out(int *, int, int, int, int, int)
    atg_argmin_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_argsort(int *, int, int, int)
    atg_argsort: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_argsort_stable(int *, int, int, int, int)
    atg_argsort_stable: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_argsort_stable_out(int *, int, int, int, int, int)
    atg_argsort_stable_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_argwhere(int *, int)
    atg_argwhere: { parameters: ["pointer", "i32"], result: "void" },
    // atg_as_strided(int *, int, int *, int, int *, int, int, int)
    atg_as_strided: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_as_strided_(int *, int, int *, int, int *, int, int, int)
    atg_as_strided_: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_as_strided_copy(int *, int, int *, int, int *, int, int, int)
    atg_as_strided_copy: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_as_strided_copy_out(int *, int, int, int *, int, int *, int, int, int)
    atg_as_strided_copy_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_as_strided_scatter(int *, int, int, int *, int, int *, int, int, int)
    atg_as_strided_scatter: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_as_strided_scatter_out(int *, int, int, int, int *, int, int *, int, int, int)
    atg_as_strided_scatter_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_asin(int *, int)
    atg_asin: { parameters: ["pointer", "i32"], result: "void" },
    // atg_asin_(int *, int)
    atg_asin_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_asin_out(int *, int, int)
    atg_asin_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_asinh(int *, int)
    atg_asinh: { parameters: ["pointer", "i32"], result: "void" },
    // atg_asinh_(int *, int)
    atg_asinh_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_asinh_out(int *, int, int)
    atg_asinh_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_atan(int *, int)
    atg_atan: { parameters: ["pointer", "i32"], result: "void" },
    // atg_atan2(int *, int, int)
    atg_atan2: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_atan2_(int *, int, int)
    atg_atan2_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_atan2_out(int *, int, int, int)
    atg_atan2_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_atan_(int *, int)
    atg_atan_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_atan_out(int *, int, int)
    atg_atan_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_atanh(int *, int)
    atg_atanh: { parameters: ["pointer", "i32"], result: "void" },
    // atg_atanh_(int *, int)
    atg_atanh_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_atanh_out(int *, int, int)
    atg_atanh_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_atleast_1d(int *, int)
    atg_atleast_1d: { parameters: ["pointer", "i32"], result: "void" },
    // atg_atleast_1d_sequence(int *, int)
    atg_atleast_1d_sequence: { parameters: ["pointer", "i32"], result: "pointer" },
    // atg_atleast_2d(int *, int)
    atg_atleast_2d: { parameters: ["pointer", "i32"], result: "void" },
    // atg_atleast_2d_sequence(int *, int)
    atg_atleast_2d_sequence: { parameters: ["pointer", "i32"], result: "pointer" },
    // atg_atleast_3d(int *, int)
    atg_atleast_3d: { parameters: ["pointer", "i32"], result: "void" },
    // atg_atleast_3d_sequence(int *, int)
    atg_atleast_3d_sequence: { parameters: ["pointer", "i32"], result: "pointer" },
    // atg_avg_pool1d(int *, int, int *, int, int *, int, int *, int, int, int)
    atg_avg_pool1d: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_avg_pool2d(int *, int, int *, int, int *, int, int *, int, int, int, int, int)
    atg_avg_pool2d: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_avg_pool2d_backward(int *, int, int, int *, int, int *, int, int *, int, int, int, int, int)
    atg_avg_pool2d_backward: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_avg_pool2d_backward_grad_input(int *, int, int, int, int *, int, int *, int, int *, int, int, int, int, int)
    atg_avg_pool2d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_avg_pool2d_out(int *, int, int, int *, int, int *, int, int *, int, int, int, int, int)
    atg_avg_pool2d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_avg_pool3d(int *, int, int *, int, int *, int, int *, int, int, int, int, int)
    atg_avg_pool3d: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_avg_pool3d_backward(int *, int, int, int *, int, int *, int, int *, int, int, int, int, int)
    atg_avg_pool3d_backward: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_avg_pool3d_backward_grad_input(int *, int, int, int, int *, int, int *, int, int *, int, int, int, int, int)
    atg_avg_pool3d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_avg_pool3d_out(int *, int, int, int *, int, int *, int, int *, int, int, int, int, int)
    atg_avg_pool3d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_baddbmm(int *, int, int, int, int, int)
    atg_baddbmm: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_baddbmm_(int *, int, int, int)
    atg_baddbmm_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_baddbmm_out(int *, int, int, int, int)
    atg_baddbmm_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_bartlett_window(int *, int, int, int)
    atg_bartlett_window: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_bartlett_window_out(int *, int, int)
    atg_bartlett_window_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bartlett_window_periodic(int *, int, int, int, int)
    atg_bartlett_window_periodic: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_bartlett_window_periodic_out(int *, int, int, int)
    atg_bartlett_window_periodic_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_batch_norm(int *, int, int, int, int, int, int, double, double, int)
    atg_batch_norm: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "f64", "i32"], result: "void" },
    // atg_batch_norm_backward_elemt(int *, int, int, int, int, int, int, int, int)
    atg_batch_norm_backward_elemt: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_batch_norm_backward_elemt_out(int *, int, int, int, int, int, int, int, int, int)
    atg_batch_norm_backward_elemt_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_batch_norm_backward_reduce(int *, int, int, int, int, int, int, int, int)
    atg_batch_norm_backward_reduce: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_batch_norm_backward_reduce_out(int *, int, int, int, int, int, int, int, int, int, int, int, int)
    atg_batch_norm_backward_reduce_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_batch_norm_elemt(int *, int, int, int, int, int, double)
    atg_batch_norm_elemt: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_batch_norm_elemt_out(int *, int, int, int, int, int, int, double)
    atg_batch_norm_elemt_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_batch_norm_gather_stats(int *, int, int, int, int, int, double, double, int)
    atg_batch_norm_gather_stats: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "f64", "f64", "i32"], result: "void" },
    // atg_batch_norm_gather_stats_out(int *, int, int, int, int, int, int, int, double, double, int)
    atg_batch_norm_gather_stats_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "f64", "i32"], result: "void" },
    // atg_batch_norm_gather_stats_with_counts(int *, int, int, int, int, int, double, double, int)
    atg_batch_norm_gather_stats_with_counts: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "f64", "f64", "i32"], result: "void" },
    // atg_batch_norm_gather_stats_with_counts_out(int *, int, int, int, int, int, int, int, double, double, int)
    atg_batch_norm_gather_stats_with_counts_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "f64", "i32"], result: "void" },
    // atg_batch_norm_stats(int *, int, double)
    atg_batch_norm_stats: { parameters: ["pointer", "i32", "f64"], result: "void" },
    // atg_batch_norm_stats_out(int *, int, int, int, double)
    atg_batch_norm_stats_out: { parameters: ["pointer", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_batch_norm_update_stats(int *, int, int, int, double)
    atg_batch_norm_update_stats: { parameters: ["pointer", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_batch_norm_update_stats_out(int *, int, int, int, int, int, double)
    atg_batch_norm_update_stats_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_bernoulli(int *, int)
    atg_bernoulli: { parameters: ["pointer", "i32"], result: "void" },
    // atg_bernoulli_(int *, int, int)
    atg_bernoulli_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bernoulli_float_(int *, int, double)
    atg_bernoulli_float_: { parameters: ["pointer", "i32", "f64"], result: "void" },
    // atg_bernoulli_p(int *, int, double)
    atg_bernoulli_p: { parameters: ["pointer", "i32", "f64"], result: "void" },
    // atg_bernoulli_tensor(int *, int, int)
    atg_bernoulli_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bilinear(int *, int, int, int, int)
    atg_bilinear: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_binary_cross_entropy(int *, int, int, int, int)
    atg_binary_cross_entropy: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_binary_cross_entropy_backward(int *, int, int, int, int, int)
    atg_binary_cross_entropy_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_binary_cross_entropy_backward_grad_input(int *, int, int, int, int, int, int)
    atg_binary_cross_entropy_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_binary_cross_entropy_out(int *, int, int, int, int, int)
    atg_binary_cross_entropy_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_binary_cross_entropy_with_logits(int *, int, int, int, int, int)
    atg_binary_cross_entropy_with_logits: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_binary_cross_entropy_with_logits_out(int *, int, int, int, int, int, int)
    atg_binary_cross_entropy_with_logits_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_bincount(int *, int, int, int)
    atg_bincount: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_bincount_out(int *, int, int, int, int)
    atg_bincount_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_binomial(int *, int, int)
    atg_binomial: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_binomial_out(int *, int, int, int)
    atg_binomial_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_bitwise_and(int *, int, int)
    atg_bitwise_and: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_and_(int *, int, int)
    atg_bitwise_and_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_and_scalar_out(int *, int, int, int)
    atg_bitwise_and_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_bitwise_and_scalar_tensor(int *, int, int)
    atg_bitwise_and_scalar_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_and_scalar_tensor_out(int *, int, int, int)
    atg_bitwise_and_scalar_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_bitwise_and_tensor(int *, int, int)
    atg_bitwise_and_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_and_tensor_(int *, int, int)
    atg_bitwise_and_tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_and_tensor_out(int *, int, int, int)
    atg_bitwise_and_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_bitwise_left_shift(int *, int, int)
    atg_bitwise_left_shift: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_left_shift_(int *, int, int)
    atg_bitwise_left_shift_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_left_shift_scalar_tensor(int *, int, int)
    atg_bitwise_left_shift_scalar_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_left_shift_scalar_tensor_out(int *, int, int, int)
    atg_bitwise_left_shift_scalar_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_bitwise_left_shift_tensor_out(int *, int, int, int)
    atg_bitwise_left_shift_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_bitwise_left_shift_tensor_scalar(int *, int, int)
    atg_bitwise_left_shift_tensor_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_left_shift_tensor_scalar_(int *, int, int)
    atg_bitwise_left_shift_tensor_scalar_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_left_shift_tensor_scalar_out(int *, int, int, int)
    atg_bitwise_left_shift_tensor_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_bitwise_not(int *, int)
    atg_bitwise_not: { parameters: ["pointer", "i32"], result: "void" },
    // atg_bitwise_not_(int *, int)
    atg_bitwise_not_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_bitwise_not_out(int *, int, int)
    atg_bitwise_not_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_or(int *, int, int)
    atg_bitwise_or: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_or_(int *, int, int)
    atg_bitwise_or_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_or_scalar_out(int *, int, int, int)
    atg_bitwise_or_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_bitwise_or_scalar_tensor(int *, int, int)
    atg_bitwise_or_scalar_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_or_scalar_tensor_out(int *, int, int, int)
    atg_bitwise_or_scalar_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_bitwise_or_tensor(int *, int, int)
    atg_bitwise_or_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_or_tensor_(int *, int, int)
    atg_bitwise_or_tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_or_tensor_out(int *, int, int, int)
    atg_bitwise_or_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_bitwise_right_shift(int *, int, int)
    atg_bitwise_right_shift: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_right_shift_(int *, int, int)
    atg_bitwise_right_shift_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_right_shift_scalar_tensor(int *, int, int)
    atg_bitwise_right_shift_scalar_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_right_shift_scalar_tensor_out(int *, int, int, int)
    atg_bitwise_right_shift_scalar_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_bitwise_right_shift_tensor_out(int *, int, int, int)
    atg_bitwise_right_shift_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_bitwise_right_shift_tensor_scalar(int *, int, int)
    atg_bitwise_right_shift_tensor_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_right_shift_tensor_scalar_(int *, int, int)
    atg_bitwise_right_shift_tensor_scalar_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_right_shift_tensor_scalar_out(int *, int, int, int)
    atg_bitwise_right_shift_tensor_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_bitwise_xor(int *, int, int)
    atg_bitwise_xor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_xor_(int *, int, int)
    atg_bitwise_xor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_xor_scalar_out(int *, int, int, int)
    atg_bitwise_xor_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_bitwise_xor_scalar_tensor(int *, int, int)
    atg_bitwise_xor_scalar_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_xor_scalar_tensor_out(int *, int, int, int)
    atg_bitwise_xor_scalar_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_bitwise_xor_tensor(int *, int, int)
    atg_bitwise_xor_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_xor_tensor_(int *, int, int)
    atg_bitwise_xor_tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bitwise_xor_tensor_out(int *, int, int, int)
    atg_bitwise_xor_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_blackman_window(int *, int, int, int)
    atg_blackman_window: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_blackman_window_out(int *, int, int)
    atg_blackman_window_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_blackman_window_periodic(int *, int, int, int, int)
    atg_blackman_window_periodic: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_blackman_window_periodic_out(int *, int, int, int)
    atg_blackman_window_periodic_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_block_diag(int *, int *, int)
    atg_block_diag: { parameters: ["pointer", "pointer", "i32"], result: "void" },
    // atg_block_diag_out(int *, int, int *, int)
    atg_block_diag_out: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_bmm(int *, int, int)
    atg_bmm: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_bmm_out(int *, int, int, int)
    atg_bmm_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_broadcast_tensors(int *, int)
    atg_broadcast_tensors: { parameters: ["pointer", "i32"], result: "pointer" },
    // atg_broadcast_to(int *, int, int *, int)
    atg_broadcast_to: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_bucketize(int *, int, int, int, int)
    atg_bucketize: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_bucketize_scalar(int *, int, int, int, int)
    atg_bucketize_scalar: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_bucketize_scalar_out(int *, int, int, int, int, int)
    atg_bucketize_scalar_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_bucketize_tensor_out(int *, int, int, int, int, int)
    atg_bucketize_tensor_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_can_cast(int, int)
    atg_can_cast: { parameters: ["i32", "i32"], result: "i32" },
    // atg_cartesian_prod(int *, int *, int)
    atg_cartesian_prod: { parameters: ["pointer", "pointer", "i32"], result: "void" },
    // atg_cat(int *, int *, int, int)
    atg_cat: { parameters: ["pointer", "pointer", "i32", "i32"], result: "void" },
    // atg_cat_out(int *, int, int *, int, int)
    atg_cat_out: { parameters: ["pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_cauchy(int *, int, double, double)
    atg_cauchy: { parameters: ["pointer", "i32", "f64", "f64"], result: "void" },
    // atg_cauchy_(int *, int, double, double)
    atg_cauchy_: { parameters: ["pointer", "i32", "f64", "f64"], result: "void" },
    // atg_cauchy_out(int *, int, int, double, double)
    atg_cauchy_out: { parameters: ["pointer", "i32", "i32", "f64", "f64"], result: "void" },
    // atg_ccol_indices(int *, int)
    atg_ccol_indices: { parameters: ["pointer", "i32"], result: "void" },
    // atg_ccol_indices_copy(int *, int)
    atg_ccol_indices_copy: { parameters: ["pointer", "i32"], result: "void" },
    // atg_ccol_indices_copy_out(int *, int, int)
    atg_ccol_indices_copy_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_cdist(int *, int, int, double, int, int)
    atg_cdist: { parameters: ["pointer", "i32", "i32", "f64", "i32", "i32"], result: "void" },
    // atg_ceil(int *, int)
    atg_ceil: { parameters: ["pointer", "i32"], result: "void" },
    // atg_ceil_(int *, int)
    atg_ceil_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_ceil_out(int *, int, int)
    atg_ceil_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_celu(int *, int)
    atg_celu: { parameters: ["pointer", "i32"], result: "void" },
    // atg_celu_(int *, int)
    atg_celu_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_celu_out(int *, int, int)
    atg_celu_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_chain_matmul(int *, int *, int)
    atg_chain_matmul: { parameters: ["pointer", "pointer", "i32"], result: "void" },
    // atg_chain_matmul_out(int *, int, int *, int)
    atg_chain_matmul_out: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_chalf(int *, int)
    atg_chalf: { parameters: ["pointer", "i32"], result: "void" },
    // atg_channel_shuffle(int *, int, int)
    atg_channel_shuffle: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_channel_shuffle_out(int *, int, int, int)
    atg_channel_shuffle_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_cholesky(int *, int, int)
    atg_cholesky: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_cholesky_inverse(int *, int, int)
    atg_cholesky_inverse: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_cholesky_inverse_out(int *, int, int, int)
    atg_cholesky_inverse_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_cholesky_out(int *, int, int, int)
    atg_cholesky_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_cholesky_solve(int *, int, int, int)
    atg_cholesky_solve: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_cholesky_solve_out(int *, int, int, int, int)
    atg_cholesky_solve_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_choose_qparams_optimized(int *, int, int, int, double, int)
    atg_choose_qparams_optimized: { parameters: ["pointer", "i32", "i32", "i32", "f64", "i32"], result: "void" },
    // atg_chunk(int, int, int)
    atg_chunk: { parameters: ["i32", "i32", "i32"], result: "pointer" },
    // atg_clamp(int *, int, int, int)
    atg_clamp: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_clamp_(int *, int, int, int)
    atg_clamp_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_clamp_max(int *, int, int)
    atg_clamp_max: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_clamp_max_(int *, int, int)
    atg_clamp_max_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_clamp_max_out(int *, int, int, int)
    atg_clamp_max_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_clamp_max_tensor(int *, int, int)
    atg_clamp_max_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_clamp_max_tensor_(int *, int, int)
    atg_clamp_max_tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_clamp_max_tensor_out(int *, int, int, int)
    atg_clamp_max_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_clamp_min(int *, int, int)
    atg_clamp_min: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_clamp_min_(int *, int, int)
    atg_clamp_min_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_clamp_min_out(int *, int, int, int)
    atg_clamp_min_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_clamp_min_tensor(int *, int, int)
    atg_clamp_min_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_clamp_min_tensor_(int *, int, int)
    atg_clamp_min_tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_clamp_min_tensor_out(int *, int, int, int)
    atg_clamp_min_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_clamp_out(int *, int, int, int, int)
    atg_clamp_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_clamp_tensor(int *, int, int, int)
    atg_clamp_tensor: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_clamp_tensor_(int *, int, int, int)
    atg_clamp_tensor_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_clamp_tensor_out(int *, int, int, int, int)
    atg_clamp_tensor_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_clip(int *, int, int, int)
    atg_clip: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_clip_(int *, int, int, int)
    atg_clip_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_clip_out(int *, int, int, int, int)
    atg_clip_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_clip_tensor(int *, int, int, int)
    atg_clip_tensor: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_clip_tensor_(int *, int, int, int)
    atg_clip_tensor_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_clip_tensor_out(int *, int, int, int, int)
    atg_clip_tensor_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_clone(int *, int, int)
    atg_clone: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_coalesce(int *, int)
    atg_coalesce: { parameters: ["pointer", "i32"], result: "void" },
    // atg_col2im(int *, int, int *, int, int *, int, int *, int, int *, int, int *, int)
    atg_col2im: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_col2im_out(int *, int, int, int *, int, int *, int, int *, int, int *, int, int *, int)
    atg_col2im_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_col_indices(int *, int)
    atg_col_indices: { parameters: ["pointer", "i32"], result: "void" },
    // atg_col_indices_copy(int *, int)
    atg_col_indices_copy: { parameters: ["pointer", "i32"], result: "void" },
    // atg_col_indices_copy_out(int *, int, int)
    atg_col_indices_copy_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_column_stack(int *, int *, int)
    atg_column_stack: { parameters: ["pointer", "pointer", "i32"], result: "void" },
    // atg_column_stack_out(int *, int, int *, int)
    atg_column_stack_out: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_combinations(int *, int, int, int)
    atg_combinations: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_complex(int *, int, int)
    atg_complex: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_complex_out(int *, int, int, int)
    atg_complex_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_concat(int *, int *, int, int)
    atg_concat: { parameters: ["pointer", "pointer", "i32", "i32"], result: "void" },
    // atg_concat_out(int *, int, int *, int, int)
    atg_concat_out: { parameters: ["pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_concatenate(int *, int *, int, int)
    atg_concatenate: { parameters: ["pointer", "pointer", "i32", "i32"], result: "void" },
    // atg_concatenate_out(int *, int, int *, int, int)
    atg_concatenate_out: { parameters: ["pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_conj(int *, int)
    atg_conj: { parameters: ["pointer", "i32"], result: "void" },
    // atg_conj_physical(int *, int)
    atg_conj_physical: { parameters: ["pointer", "i32"], result: "void" },
    // atg_conj_physical_(int *, int)
    atg_conj_physical_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_conj_physical_out(int *, int, int)
    atg_conj_physical_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_constant_pad_nd(int *, int, int *, int)
    atg_constant_pad_nd: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_constant_pad_nd_out(int *, int, int, int *, int)
    atg_constant_pad_nd_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_contiguous(int *, int)
    atg_contiguous: { parameters: ["pointer", "i32"], result: "void" },
    // atg_conv1d(int *, int, int, int, int *, int, int *, int, int *, int, int)
    atg_conv1d: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_conv1d_padding(int *, int, int, int, int *, int, char *, int, int *, int, int)
    atg_conv1d_padding: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_conv2d(int *, int, int, int, int *, int, int *, int, int *, int, int)
    atg_conv2d: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_conv2d_padding(int *, int, int, int, int *, int, char *, int, int *, int, int)
    atg_conv2d_padding: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_conv3d(int *, int, int, int, int *, int, int *, int, int *, int, int)
    atg_conv3d: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_conv3d_padding(int *, int, int, int, int *, int, char *, int, int *, int, int)
    atg_conv3d_padding: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_conv_depthwise3d(int *, int, int, int *, int, int, int *, int, int *, int, int *, int)
    atg_conv_depthwise3d: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_conv_depthwise3d_out(int *, int, int, int, int *, int, int, int *, int, int *, int, int *, int)
    atg_conv_depthwise3d_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_conv_tbc(int *, int, int, int, int)
    atg_conv_tbc: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_conv_tbc_backward(int *, int, int, int, int, int)
    atg_conv_tbc_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_conv_tbc_out(int *, int, int, int, int, int)
    atg_conv_tbc_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_conv_transpose1d(int *, int, int, int, int *, int, int *, int, int *, int, int, int *, int)
    atg_conv_transpose1d: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_conv_transpose2d(int *, int, int, int, int *, int, int *, int, int *, int, int, int *, int)
    atg_conv_transpose2d: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_conv_transpose3d(int *, int, int, int, int *, int, int *, int, int *, int, int, int *, int)
    atg_conv_transpose3d: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_convolution(int *, int, int, int, int *, int, int *, int, int *, int, int, int *, int, int)
    atg_convolution: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_convolution_out(int *, int, int, int, int, int *, int, int *, int, int *, int, int, int *, int, int)
    atg_convolution_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_convolution_overrideable(int *, int, int, int, int *, int, int *, int, int *, int, int, int *, int, int)
    atg_convolution_overrideable: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_convolution_overrideable_out(int *, int, int, int, int, int *, int, int *, int, int *, int, int, int *, int, int)
    atg_convolution_overrideable_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_copy_sparse_to_sparse(int *, int, int, int)
    atg_copy_sparse_to_sparse: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_copy_sparse_to_sparse_(int *, int, int, int)
    atg_copy_sparse_to_sparse_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_copy_sparse_to_sparse_out(int *, int, int, int, int)
    atg_copy_sparse_to_sparse_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_copysign(int *, int, int)
    atg_copysign: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_copysign_(int *, int, int)
    atg_copysign_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_copysign_out(int *, int, int, int)
    atg_copysign_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_copysign_scalar(int *, int, int)
    atg_copysign_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_copysign_scalar_(int *, int, int)
    atg_copysign_scalar_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_copysign_scalar_out(int *, int, int, int)
    atg_copysign_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_corrcoef(int *, int)
    atg_corrcoef: { parameters: ["pointer", "i32"], result: "void" },
    // atg_cos(int *, int)
    atg_cos: { parameters: ["pointer", "i32"], result: "void" },
    // atg_cos_(int *, int)
    atg_cos_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_cos_out(int *, int, int)
    atg_cos_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_cosh(int *, int)
    atg_cosh: { parameters: ["pointer", "i32"], result: "void" },
    // atg_cosh_(int *, int)
    atg_cosh_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_cosh_out(int *, int, int)
    atg_cosh_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_cosine_embedding_loss(int *, int, int, int, double, int)
    atg_cosine_embedding_loss: { parameters: ["pointer", "i32", "i32", "i32", "f64", "i32"], result: "void" },
    // atg_cosine_similarity(int *, int, int, int, double)
    atg_cosine_similarity: { parameters: ["pointer", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_count_nonzero(int *, int, int, int)
    atg_count_nonzero: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_count_nonzero_dim_intlist(int *, int, int *, int)
    atg_count_nonzero_dim_intlist: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_count_nonzero_dim_intlist_out(int *, int, int, int *, int)
    atg_count_nonzero_dim_intlist_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_count_nonzero_out(int *, int, int, int, int)
    atg_count_nonzero_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_cov(int *, int, int, int, int)
    atg_cov: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_cross(int *, int, int, int, int)
    atg_cross: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_cross_entropy_loss(int *, int, int, int, int, int, double)
    atg_cross_entropy_loss: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_cross_out(int *, int, int, int, int, int)
    atg_cross_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_crow_indices(int *, int)
    atg_crow_indices: { parameters: ["pointer", "i32"], result: "void" },
    // atg_crow_indices_copy(int *, int)
    atg_crow_indices_copy: { parameters: ["pointer", "i32"], result: "void" },
    // atg_crow_indices_copy_out(int *, int, int)
    atg_crow_indices_copy_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_ctc_loss(int *, int, int, int *, int, int *, int, int, int, int)
    atg_ctc_loss: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_ctc_loss_tensor(int *, int, int, int, int, int, int, int)
    atg_ctc_loss_tensor: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_cudnn_affine_grid_generator(int *, int, int, int, int, int)
    atg_cudnn_affine_grid_generator: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_cudnn_affine_grid_generator_backward(int *, int, int, int, int, int)
    atg_cudnn_affine_grid_generator_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_cudnn_affine_grid_generator_backward_out(int *, int, int, int, int, int, int)
    atg_cudnn_affine_grid_generator_backward_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_cudnn_affine_grid_generator_out(int *, int, int, int, int, int, int)
    atg_cudnn_affine_grid_generator_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_cudnn_batch_norm(int *, int, int, int, int, int, int, double, double)
    atg_cudnn_batch_norm: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "f64"], result: "void" },
    // atg_cudnn_batch_norm_backward(int *, int, int, int, int, int, int, int, double, int)
    atg_cudnn_batch_norm_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "i32"], result: "void" },
    // atg_cudnn_batch_norm_backward_out(int *, int, int, int, int, int, int, int, int, int, int, double, int)
    atg_cudnn_batch_norm_backward_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "i32"], result: "void" },
    // atg_cudnn_batch_norm_out(int *, int, int, int, int, int, int, int, int, int, int, double, double)
    atg_cudnn_batch_norm_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "f64"], result: "void" },
    // atg_cudnn_convolution(int *, int, int, int *, int, int *, int, int *, int, int, int, int, int)
    atg_cudnn_convolution: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_cudnn_convolution_add_relu(int *, int, int, int, int, int, int *, int, int *, int, int *, int, int)
    atg_cudnn_convolution_add_relu: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_cudnn_convolution_add_relu_out(int *, int, int, int, int, int, int, int *, int, int *, int, int *, int, int)
    atg_cudnn_convolution_add_relu_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_cudnn_convolution_out(int *, int, int, int, int *, int, int *, int, int *, int, int, int, int, int)
    atg_cudnn_convolution_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_cudnn_convolution_relu(int *, int, int, int, int *, int, int *, int, int *, int, int)
    atg_cudnn_convolution_relu: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_cudnn_convolution_relu_out(int *, int, int, int, int, int *, int, int *, int, int *, int, int)
    atg_cudnn_convolution_relu_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_cudnn_convolution_transpose(int *, int, int, int *, int, int *, int, int *, int, int *, int, int, int, int, int)
    atg_cudnn_convolution_transpose: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_cudnn_convolution_transpose_out(int *, int, int, int, int *, int, int *, int, int *, int, int *, int, int, int, int, int)
    atg_cudnn_convolution_transpose_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_cudnn_grid_sampler(int *, int, int)
    atg_cudnn_grid_sampler: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_cudnn_grid_sampler_backward(int *, int, int, int)
    atg_cudnn_grid_sampler_backward: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_cudnn_grid_sampler_backward_out(int *, int, int, int, int, int)
    atg_cudnn_grid_sampler_backward_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_cudnn_grid_sampler_out(int *, int, int, int)
    atg_cudnn_grid_sampler_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_cudnn_is_acceptable(int)
    atg_cudnn_is_acceptable: { parameters: ["i32"], result: "i32" },
    // atg_cummax(int *, int, int)
    atg_cummax: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_cummax_out(int *, int, int, int, int)
    atg_cummax_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_cummaxmin_backward(int *, int, int, int, int)
    atg_cummaxmin_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_cummin(int *, int, int)
    atg_cummin: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_cummin_out(int *, int, int, int, int)
    atg_cummin_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_cumprod(int *, int, int, int)
    atg_cumprod: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_cumprod_(int *, int, int, int)
    atg_cumprod_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_cumprod_backward(int *, int, int, int, int)
    atg_cumprod_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_cumprod_out(int *, int, int, int, int)
    atg_cumprod_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_cumsum(int *, int, int, int)
    atg_cumsum: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_cumsum_(int *, int, int, int)
    atg_cumsum_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_cumsum_out(int *, int, int, int, int)
    atg_cumsum_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_cumulative_trapezoid(int *, int, int)
    atg_cumulative_trapezoid: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_cumulative_trapezoid_x(int *, int, int, int)
    atg_cumulative_trapezoid_x: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_data(int *, int)
    atg_data: { parameters: ["pointer", "i32"], result: "void" },
    // atg_deg2rad(int *, int)
    atg_deg2rad: { parameters: ["pointer", "i32"], result: "void" },
    // atg_deg2rad_(int *, int)
    atg_deg2rad_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_deg2rad_out(int *, int, int)
    atg_deg2rad_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_dense_dim(int)
    atg_dense_dim: { parameters: ["i32"], result: "i32" },
    // atg_dequantize(int *, int)
    atg_dequantize: { parameters: ["pointer", "i32"], result: "void" },
    // atg_dequantize_self_out(int *, int, int)
    atg_dequantize_self_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_dequantize_tensors(int *, int)
    atg_dequantize_tensors: { parameters: ["pointer", "i32"], result: "pointer" },
    // atg_dequantize_tensors_out(int *, int, int *, int)
    atg_dequantize_tensors_out: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_det(int *, int)
    atg_det: { parameters: ["pointer", "i32"], result: "void" },
    // atg_detach(int *, int)
    atg_detach: { parameters: ["pointer", "i32"], result: "void" },
    // atg_detach_(int *, int)
    atg_detach_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_detach_copy(int *, int)
    atg_detach_copy: { parameters: ["pointer", "i32"], result: "void" },
    // atg_detach_copy_out(int *, int, int)
    atg_detach_copy_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_diag(int *, int, int)
    atg_diag: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_diag_backward(int *, int, int *, int, int)
    atg_diag_backward: { parameters: ["pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_diag_embed(int *, int, int, int, int)
    atg_diag_embed: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_diag_embed_out(int *, int, int, int, int, int)
    atg_diag_embed_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_diag_out(int *, int, int, int)
    atg_diag_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_diagflat(int *, int, int)
    atg_diagflat: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_diagonal(int *, int, int, int, int)
    atg_diagonal: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_diagonal_backward(int *, int, int *, int, int, int, int)
    atg_diagonal_backward: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_diagonal_backward_out(int *, int, int, int *, int, int, int, int)
    atg_diagonal_backward_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_diagonal_copy(int *, int, int, int, int)
    atg_diagonal_copy: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_diagonal_copy_out(int *, int, int, int, int, int)
    atg_diagonal_copy_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_diagonal_scatter(int *, int, int, int, int, int)
    atg_diagonal_scatter: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_diagonal_scatter_out(int *, int, int, int, int, int, int)
    atg_diagonal_scatter_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_diff(int *, int, int, int, int, int)
    atg_diff: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_diff_out(int *, int, int, int, int, int, int)
    atg_diff_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_digamma(int *, int)
    atg_digamma: { parameters: ["pointer", "i32"], result: "void" },
    // atg_digamma_(int *, int)
    atg_digamma_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_digamma_out(int *, int, int)
    atg_digamma_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_dist(int *, int, int)
    atg_dist: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_dist_out(int *, int, int, int)
    atg_dist_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_div(int *, int, int)
    atg_div: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_div_(int *, int, int)
    atg_div_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_div_out(int *, int, int, int)
    atg_div_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_div_out_mode(int *, int, int, int, char *, int)
    atg_div_out_mode: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_div_scalar(int *, int, int)
    atg_div_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_div_scalar_(int *, int, int)
    atg_div_scalar_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_div_scalar_mode(int *, int, int, char *, int)
    atg_div_scalar_mode: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_div_scalar_mode_(int *, int, int, char *, int)
    atg_div_scalar_mode_: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_div_scalar_mode_out(int *, int, int, int, char *, int)
    atg_div_scalar_mode_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_div_scalar_out(int *, int, int, int)
    atg_div_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_div_tensor_mode(int *, int, int, char *, int)
    atg_div_tensor_mode: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_div_tensor_mode_(int *, int, int, char *, int)
    atg_div_tensor_mode_: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_divide(int *, int, int)
    atg_divide: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_divide_(int *, int, int)
    atg_divide_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_divide_out(int *, int, int, int)
    atg_divide_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_divide_out_mode(int *, int, int, int, char *, int)
    atg_divide_out_mode: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_divide_scalar(int *, int, int)
    atg_divide_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_divide_scalar_(int *, int, int)
    atg_divide_scalar_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_divide_scalar_mode(int *, int, int, char *, int)
    atg_divide_scalar_mode: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_divide_scalar_mode_(int *, int, int, char *, int)
    atg_divide_scalar_mode_: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_divide_tensor_mode(int *, int, int, char *, int)
    atg_divide_tensor_mode: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_divide_tensor_mode_(int *, int, int, char *, int)
    atg_divide_tensor_mode_: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_dot(int *, int, int)
    atg_dot: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_dot_out(int *, int, int, int)
    atg_dot_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_dropout(int *, int, double, int)
    atg_dropout: { parameters: ["pointer", "i32", "f64", "i32"], result: "void" },
    // atg_dropout_(int *, int, double, int)
    atg_dropout_: { parameters: ["pointer", "i32", "f64", "i32"], result: "void" },
    // atg_dsplit(int, int)
    atg_dsplit: { parameters: ["i32", "i32"], result: "pointer" },
    // atg_dsplit_array(int, int *, int)
    atg_dsplit_array: { parameters: ["i32", "pointer", "i32"], result: "pointer" },
    // atg_dstack(int *, int *, int)
    atg_dstack: { parameters: ["pointer", "pointer", "i32"], result: "void" },
    // atg_dstack_out(int *, int, int *, int)
    atg_dstack_out: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_einsum(int *, char *, int, int *, int, int *, int)
    atg_einsum: { parameters: ["pointer", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_elu(int *, int)
    atg_elu: { parameters: ["pointer", "i32"], result: "void" },
    // atg_elu_(int *, int)
    atg_elu_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_elu_backward(int *, int, int, int, int, int, int)
    atg_elu_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_elu_backward_grad_input(int *, int, int, int, int, int, int, int)
    atg_elu_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_elu_out(int *, int, int)
    atg_elu_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_embedding(int *, int, int, int, int, int)
    atg_embedding: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_embedding_backward(int *, int, int, int, int, int, int)
    atg_embedding_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_embedding_bag(int *, int, int, int, int, int, int, int, int)
    atg_embedding_bag: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_embedding_bag_padding_idx(int *, int, int, int, int, int, int, int, int, int, int)
    atg_embedding_bag_padding_idx: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_embedding_dense_backward(int *, int, int, int, int, int)
    atg_embedding_dense_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_embedding_dense_backward_out(int *, int, int, int, int, int, int)
    atg_embedding_dense_backward_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_embedding_out(int *, int, int, int, int, int, int)
    atg_embedding_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_embedding_renorm(int *, int, int, double, double)
    atg_embedding_renorm: { parameters: ["pointer", "i32", "i32", "f64", "f64"], result: "void" },
    // atg_embedding_renorm_(int *, int, int, double, double)
    atg_embedding_renorm_: { parameters: ["pointer", "i32", "i32", "f64", "f64"], result: "void" },
    // atg_embedding_renorm_out(int *, int, int, int, double, double)
    atg_embedding_renorm_out: { parameters: ["pointer", "i32", "i32", "i32", "f64", "f64"], result: "void" },
    // atg_embedding_sparse_backward(int *, int, int, int, int, int)
    atg_embedding_sparse_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_empty(int *, int *, int, int, int)
    atg_empty: { parameters: ["pointer", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_empty_like(int *, int)
    atg_empty_like: { parameters: ["pointer", "i32"], result: "void" },
    // atg_empty_like_out(int *, int, int)
    atg_empty_like_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_empty_out(int *, int, int *, int)
    atg_empty_out: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_empty_quantized(int *, int *, int, int, int, int)
    atg_empty_quantized: { parameters: ["pointer", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_empty_quantized_out(int *, int, int *, int, int)
    atg_empty_quantized_out: { parameters: ["pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_empty_strided(int *, int *, int, int *, int, int, int)
    atg_empty_strided: { parameters: ["pointer", "pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_empty_strided_out(int *, int, int *, int, int *, int)
    atg_empty_strided_out: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_eq(int *, int, int)
    atg_eq: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_eq_(int *, int, int)
    atg_eq_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_eq_scalar_out(int *, int, int, int)
    atg_eq_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_eq_tensor(int *, int, int)
    atg_eq_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_eq_tensor_(int *, int, int)
    atg_eq_tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_eq_tensor_out(int *, int, int, int)
    atg_eq_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_equal(int, int)
    atg_equal: { parameters: ["i32", "i32"], result: "i32" },
    // atg_erf(int *, int)
    atg_erf: { parameters: ["pointer", "i32"], result: "void" },
    // atg_erf_(int *, int)
    atg_erf_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_erf_out(int *, int, int)
    atg_erf_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_erfc(int *, int)
    atg_erfc: { parameters: ["pointer", "i32"], result: "void" },
    // atg_erfc_(int *, int)
    atg_erfc_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_erfc_out(int *, int, int)
    atg_erfc_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_erfinv(int *, int)
    atg_erfinv: { parameters: ["pointer", "i32"], result: "void" },
    // atg_erfinv_(int *, int)
    atg_erfinv_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_erfinv_out(int *, int, int)
    atg_erfinv_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_exp(int *, int)
    atg_exp: { parameters: ["pointer", "i32"], result: "void" },
    // atg_exp2(int *, int)
    atg_exp2: { parameters: ["pointer", "i32"], result: "void" },
    // atg_exp2_(int *, int)
    atg_exp2_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_exp2_out(int *, int, int)
    atg_exp2_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_exp_(int *, int)
    atg_exp_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_exp_out(int *, int, int)
    atg_exp_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_expand(int *, int, int *, int, int)
    atg_expand: { parameters: ["pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_expand_as(int *, int, int)
    atg_expand_as: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_expand_copy(int *, int, int *, int, int)
    atg_expand_copy: { parameters: ["pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_expand_copy_out(int *, int, int, int *, int, int)
    atg_expand_copy_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_expm1(int *, int)
    atg_expm1: { parameters: ["pointer", "i32"], result: "void" },
    // atg_expm1_(int *, int)
    atg_expm1_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_expm1_out(int *, int, int)
    atg_expm1_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_exponential(int *, int, double)
    atg_exponential: { parameters: ["pointer", "i32", "f64"], result: "void" },
    // atg_exponential_(int *, int, double)
    atg_exponential_: { parameters: ["pointer", "i32", "f64"], result: "void" },
    // atg_exponential_out(int *, int, int, double)
    atg_exponential_out: { parameters: ["pointer", "i32", "i32", "f64"], result: "void" },
    // atg_eye(int *, int, int, int)
    atg_eye: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_eye_m(int *, int, int, int, int)
    atg_eye_m: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_eye_m_out(int *, int, int, int)
    atg_eye_m_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_eye_out(int *, int, int)
    atg_eye_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_fake_quantize_per_channel_affine(int *, int, int, int, int, int, int)
    atg_fake_quantize_per_channel_affine: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_fake_quantize_per_channel_affine_cachemask(int *, int, int, int, int, int, int)
    atg_fake_quantize_per_channel_affine_cachemask: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_fake_quantize_per_channel_affine_cachemask_backward(int *, int, int)
    atg_fake_quantize_per_channel_affine_cachemask_backward: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_fake_quantize_per_channel_affine_cachemask_out(int *, int, int, int, int, int, int, int, int)
    atg_fake_quantize_per_channel_affine_cachemask_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_fake_quantize_per_tensor_affine(int *, int, double, int, int, int)
    atg_fake_quantize_per_tensor_affine: { parameters: ["pointer", "i32", "f64", "i32", "i32", "i32"], result: "void" },
    // atg_fake_quantize_per_tensor_affine_cachemask(int *, int, double, int, int, int)
    atg_fake_quantize_per_tensor_affine_cachemask: { parameters: ["pointer", "i32", "f64", "i32", "i32", "i32"], result: "void" },
    // atg_fake_quantize_per_tensor_affine_cachemask_backward(int *, int, int)
    atg_fake_quantize_per_tensor_affine_cachemask_backward: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_fake_quantize_per_tensor_affine_cachemask_out(int *, int, int, int, double, int, int, int)
    atg_fake_quantize_per_tensor_affine_cachemask_out: { parameters: ["pointer", "i32", "i32", "i32", "f64", "i32", "i32", "i32"], result: "void" },
    // atg_fake_quantize_per_tensor_affine_tensor_qparams(int *, int, int, int, int, int)
    atg_fake_quantize_per_tensor_affine_tensor_qparams: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_fbgemm_linear_fp16_weight(int *, int, int, int)
    atg_fbgemm_linear_fp16_weight: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_fbgemm_linear_fp16_weight_fp32_activation(int *, int, int, int)
    atg_fbgemm_linear_fp16_weight_fp32_activation: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_fbgemm_linear_int8_weight(int *, int, int, int, int, int, int, int)
    atg_fbgemm_linear_int8_weight: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_fbgemm_linear_int8_weight_fp32_activation(int *, int, int, int, int, int, int, int)
    atg_fbgemm_linear_int8_weight_fp32_activation: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_fbgemm_pack_gemm_matrix_fp16(int *, int)
    atg_fbgemm_pack_gemm_matrix_fp16: { parameters: ["pointer", "i32"], result: "void" },
    // atg_fbgemm_pack_quantized_matrix(int *, int)
    atg_fbgemm_pack_quantized_matrix: { parameters: ["pointer", "i32"], result: "void" },
    // atg_fbgemm_pack_quantized_matrix_kn(int *, int, int, int)
    atg_fbgemm_pack_quantized_matrix_kn: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_feature_alpha_dropout(int *, int, double, int)
    atg_feature_alpha_dropout: { parameters: ["pointer", "i32", "f64", "i32"], result: "void" },
    // atg_feature_alpha_dropout_(int *, int, double, int)
    atg_feature_alpha_dropout_: { parameters: ["pointer", "i32", "f64", "i32"], result: "void" },
    // atg_feature_dropout(int *, int, double, int)
    atg_feature_dropout: { parameters: ["pointer", "i32", "f64", "i32"], result: "void" },
    // atg_feature_dropout_(int *, int, double, int)
    atg_feature_dropout_: { parameters: ["pointer", "i32", "f64", "i32"], result: "void" },
    // atg_fft_fft(int *, int, int, int, int, char *, int)
    atg_fft_fft: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_fft2(int *, int, int *, int, int *, int, char *, int)
    atg_fft_fft2: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_fft2_out(int *, int, int, int *, int, int *, int, char *, int)
    atg_fft_fft2_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_fft_out(int *, int, int, int, int, int, char *, int)
    atg_fft_fft_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_fftfreq(int *, int, double, int, int)
    atg_fft_fftfreq: { parameters: ["pointer", "i32", "f64", "i32", "i32"], result: "void" },
    // atg_fft_fftfreq_out(int *, int, int, double)
    atg_fft_fftfreq_out: { parameters: ["pointer", "i32", "i32", "f64"], result: "void" },
    // atg_fft_fftn(int *, int, int *, int, int *, int, char *, int)
    atg_fft_fftn: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_fftn_out(int *, int, int, int *, int, int *, int, char *, int)
    atg_fft_fftn_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_fftshift(int *, int, int *, int)
    atg_fft_fftshift: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_hfft(int *, int, int, int, int, char *, int)
    atg_fft_hfft: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_hfft2(int *, int, int *, int, int *, int, char *, int)
    atg_fft_hfft2: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_hfft2_out(int *, int, int, int *, int, int *, int, char *, int)
    atg_fft_hfft2_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_hfft_out(int *, int, int, int, int, int, char *, int)
    atg_fft_hfft_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_hfftn(int *, int, int *, int, int *, int, char *, int)
    atg_fft_hfftn: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_hfftn_out(int *, int, int, int *, int, int *, int, char *, int)
    atg_fft_hfftn_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_ifft(int *, int, int, int, int, char *, int)
    atg_fft_ifft: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_ifft2(int *, int, int *, int, int *, int, char *, int)
    atg_fft_ifft2: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_ifft2_out(int *, int, int, int *, int, int *, int, char *, int)
    atg_fft_ifft2_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_ifft_out(int *, int, int, int, int, int, char *, int)
    atg_fft_ifft_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_ifftn(int *, int, int *, int, int *, int, char *, int)
    atg_fft_ifftn: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_ifftn_out(int *, int, int, int *, int, int *, int, char *, int)
    atg_fft_ifftn_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_ifftshift(int *, int, int *, int)
    atg_fft_ifftshift: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_ihfft(int *, int, int, int, int, char *, int)
    atg_fft_ihfft: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_ihfft2(int *, int, int *, int, int *, int, char *, int)
    atg_fft_ihfft2: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_ihfft2_out(int *, int, int, int *, int, int *, int, char *, int)
    atg_fft_ihfft2_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_ihfft_out(int *, int, int, int, int, int, char *, int)
    atg_fft_ihfft_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_ihfftn(int *, int, int *, int, int *, int, char *, int)
    atg_fft_ihfftn: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_ihfftn_out(int *, int, int, int *, int, int *, int, char *, int)
    atg_fft_ihfftn_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_irfft(int *, int, int, int, int, char *, int)
    atg_fft_irfft: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_irfft2(int *, int, int *, int, int *, int, char *, int)
    atg_fft_irfft2: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_irfft2_out(int *, int, int, int *, int, int *, int, char *, int)
    atg_fft_irfft2_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_irfft_out(int *, int, int, int, int, int, char *, int)
    atg_fft_irfft_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_irfftn(int *, int, int *, int, int *, int, char *, int)
    atg_fft_irfftn: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_irfftn_out(int *, int, int, int *, int, int *, int, char *, int)
    atg_fft_irfftn_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_rfft(int *, int, int, int, int, char *, int)
    atg_fft_rfft: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_rfft2(int *, int, int *, int, int *, int, char *, int)
    atg_fft_rfft2: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_rfft2_out(int *, int, int, int *, int, int *, int, char *, int)
    atg_fft_rfft2_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_rfft_out(int *, int, int, int, int, int, char *, int)
    atg_fft_rfft_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_rfftfreq(int *, int, double, int, int)
    atg_fft_rfftfreq: { parameters: ["pointer", "i32", "f64", "i32", "i32"], result: "void" },
    // atg_fft_rfftfreq_out(int *, int, int, double)
    atg_fft_rfftfreq_out: { parameters: ["pointer", "i32", "i32", "f64"], result: "void" },
    // atg_fft_rfftn(int *, int, int *, int, int *, int, char *, int)
    atg_fft_rfftn: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fft_rfftn_out(int *, int, int, int *, int, int *, int, char *, int)
    atg_fft_rfftn_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_fill(int *, int, int)
    atg_fill: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_fill_(int *, int, int)
    atg_fill_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_fill_diagonal_(int *, int, int, int)
    atg_fill_diagonal_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_fill_scalar_out(int *, int, int, int)
    atg_fill_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_fill_tensor(int *, int, int)
    atg_fill_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_fill_tensor_(int *, int, int)
    atg_fill_tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_fill_tensor_out(int *, int, int, int)
    atg_fill_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_fix(int *, int)
    atg_fix: { parameters: ["pointer", "i32"], result: "void" },
    // atg_fix_(int *, int)
    atg_fix_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_fix_out(int *, int, int)
    atg_fix_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_flatten(int *, int, int, int)
    atg_flatten: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_flatten_dense_tensors(int *, int *, int)
    atg_flatten_dense_tensors: { parameters: ["pointer", "pointer", "i32"], result: "void" },
    // atg_flip(int *, int, int *, int)
    atg_flip: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_flip_out(int *, int, int, int *, int)
    atg_flip_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_fliplr(int *, int)
    atg_fliplr: { parameters: ["pointer", "i32"], result: "void" },
    // atg_flipud(int *, int)
    atg_flipud: { parameters: ["pointer", "i32"], result: "void" },
    // atg_float_power(int *, int, int)
    atg_float_power: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_float_power_(int *, int, int)
    atg_float_power_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_float_power_scalar(int *, int, int)
    atg_float_power_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_float_power_scalar_out(int *, int, int, int)
    atg_float_power_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_float_power_tensor_(int *, int, int)
    atg_float_power_tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_float_power_tensor_scalar(int *, int, int)
    atg_float_power_tensor_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_float_power_tensor_scalar_out(int *, int, int, int)
    atg_float_power_tensor_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_float_power_tensor_tensor_out(int *, int, int, int)
    atg_float_power_tensor_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_floor(int *, int)
    atg_floor: { parameters: ["pointer", "i32"], result: "void" },
    // atg_floor_(int *, int)
    atg_floor_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_floor_divide(int *, int, int)
    atg_floor_divide: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_floor_divide_(int *, int, int)
    atg_floor_divide_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_floor_divide_out(int *, int, int, int)
    atg_floor_divide_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_floor_divide_scalar(int *, int, int)
    atg_floor_divide_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_floor_divide_scalar_(int *, int, int)
    atg_floor_divide_scalar_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_floor_out(int *, int, int)
    atg_floor_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_fmax(int *, int, int)
    atg_fmax: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_fmax_out(int *, int, int, int)
    atg_fmax_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_fmin(int *, int, int)
    atg_fmin: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_fmin_out(int *, int, int, int)
    atg_fmin_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_fmod(int *, int, int)
    atg_fmod: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_fmod_(int *, int, int)
    atg_fmod_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_fmod_scalar_out(int *, int, int, int)
    atg_fmod_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_fmod_tensor(int *, int, int)
    atg_fmod_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_fmod_tensor_(int *, int, int)
    atg_fmod_tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_fmod_tensor_out(int *, int, int, int)
    atg_fmod_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_frac(int *, int)
    atg_frac: { parameters: ["pointer", "i32"], result: "void" },
    // atg_frac_(int *, int)
    atg_frac_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_frac_out(int *, int, int)
    atg_frac_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_fractional_max_pool2d(int *, int, int *, int, int *, int, int)
    atg_fractional_max_pool2d: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_fractional_max_pool2d_backward(int *, int, int, int *, int, int *, int, int)
    atg_fractional_max_pool2d_backward: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_fractional_max_pool2d_backward_grad_input(int *, int, int, int, int *, int, int *, int, int)
    atg_fractional_max_pool2d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_fractional_max_pool2d_output(int *, int, int, int, int *, int, int *, int, int)
    atg_fractional_max_pool2d_output: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_fractional_max_pool3d(int *, int, int *, int, int *, int, int)
    atg_fractional_max_pool3d: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_fractional_max_pool3d_backward(int *, int, int, int *, int, int *, int, int)
    atg_fractional_max_pool3d_backward: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_fractional_max_pool3d_backward_grad_input(int *, int, int, int, int *, int, int *, int, int)
    atg_fractional_max_pool3d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_fractional_max_pool3d_output(int *, int, int, int, int *, int, int *, int, int)
    atg_fractional_max_pool3d_output: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_frexp(int *, int)
    atg_frexp: { parameters: ["pointer", "i32"], result: "void" },
    // atg_frexp_tensor_out(int *, int, int, int)
    atg_frexp_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_frobenius_norm(int *, int)
    atg_frobenius_norm: { parameters: ["pointer", "i32"], result: "void" },
    // atg_frobenius_norm_dim(int *, int, int *, int, int)
    atg_frobenius_norm_dim: { parameters: ["pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_frobenius_norm_out(int *, int, int, int *, int, int)
    atg_frobenius_norm_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_from_file(int *, char *, int, int, int, int, int, int)
    atg_from_file: { parameters: ["pointer", "pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_from_file_out(int *, int, char *, int, int, int, int)
    atg_from_file_out: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_full(int *, int *, int, int, int, int)
    atg_full: { parameters: ["pointer", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_full_like(int *, int, int)
    atg_full_like: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_full_like_out(int *, int, int, int)
    atg_full_like_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_full_out(int *, int, int *, int, int)
    atg_full_out: { parameters: ["pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_fused_moving_avg_obs_fake_quant(int *, int, int, int, int, int, int, int, double, int, int, int, int, int)
    atg_fused_moving_avg_obs_fake_quant: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_gather(int *, int, int, int, int)
    atg_gather: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_gather_backward(int *, int, int, int, int, int)
    atg_gather_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_gather_out(int *, int, int, int, int, int)
    atg_gather_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_gcd(int *, int, int)
    atg_gcd: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_gcd_(int *, int, int)
    atg_gcd_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_gcd_out(int *, int, int, int)
    atg_gcd_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_ge(int *, int, int)
    atg_ge: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_ge_(int *, int, int)
    atg_ge_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_ge_scalar_out(int *, int, int, int)
    atg_ge_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_ge_tensor(int *, int, int)
    atg_ge_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_ge_tensor_(int *, int, int)
    atg_ge_tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_ge_tensor_out(int *, int, int, int)
    atg_ge_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_gelu(int *, int, char *, int)
    atg_gelu: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_gelu_(int *, int, char *, int)
    atg_gelu_: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_gelu_backward(int *, int, int, char *, int)
    atg_gelu_backward: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_gelu_backward_grad_input(int *, int, int, int, char *, int)
    atg_gelu_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_gelu_out(int *, int, int, char *, int)
    atg_gelu_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_geometric(int *, int, double)
    atg_geometric: { parameters: ["pointer", "i32", "f64"], result: "void" },
    // atg_geometric_(int *, int, double)
    atg_geometric_: { parameters: ["pointer", "i32", "f64"], result: "void" },
    // atg_geometric_out(int *, int, int, double)
    atg_geometric_out: { parameters: ["pointer", "i32", "i32", "f64"], result: "void" },
    // atg_geqrf(int *, int)
    atg_geqrf: { parameters: ["pointer", "i32"], result: "void" },
    // atg_geqrf_a(int *, int, int, int)
    atg_geqrf_a: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_ger(int *, int, int)
    atg_ger: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_ger_out(int *, int, int, int)
    atg_ger_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_glu(int *, int, int)
    atg_glu: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_glu_backward(int *, int, int, int)
    atg_glu_backward: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_glu_backward_grad_input(int *, int, int, int, int)
    atg_glu_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_glu_backward_jvp(int *, int, int, int, int, int, int)
    atg_glu_backward_jvp: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_glu_backward_jvp_out(int *, int, int, int, int, int, int, int)
    atg_glu_backward_jvp_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_glu_jvp(int *, int, int, int, int)
    atg_glu_jvp: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_glu_jvp_out(int *, int, int, int, int, int)
    atg_glu_jvp_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_glu_out(int *, int, int, int)
    atg_glu_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_grad(int *, int)
    atg_grad: { parameters: ["pointer", "i32"], result: "void" },
    // atg_greater(int *, int, int)
    atg_greater: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_greater_(int *, int, int)
    atg_greater_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_greater_equal(int *, int, int)
    atg_greater_equal: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_greater_equal_(int *, int, int)
    atg_greater_equal_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_greater_equal_scalar_out(int *, int, int, int)
    atg_greater_equal_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_greater_equal_tensor(int *, int, int)
    atg_greater_equal_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_greater_equal_tensor_(int *, int, int)
    atg_greater_equal_tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_greater_equal_tensor_out(int *, int, int, int)
    atg_greater_equal_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_greater_scalar_out(int *, int, int, int)
    atg_greater_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_greater_tensor(int *, int, int)
    atg_greater_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_greater_tensor_(int *, int, int)
    atg_greater_tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_greater_tensor_out(int *, int, int, int)
    atg_greater_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_grid_sampler(int *, int, int, int, int, int)
    atg_grid_sampler: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_grid_sampler_2d(int *, int, int, int, int, int)
    atg_grid_sampler_2d: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_grid_sampler_2d_out(int *, int, int, int, int, int, int)
    atg_grid_sampler_2d_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_grid_sampler_3d(int *, int, int, int, int, int)
    atg_grid_sampler_3d: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_grid_sampler_3d_out(int *, int, int, int, int, int, int)
    atg_grid_sampler_3d_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_group_norm(int *, int, int, int, int, double, int)
    atg_group_norm: { parameters: ["pointer", "i32", "i32", "i32", "i32", "f64", "i32"], result: "void" },
    // atg_gru(int *, int, int, int *, int, int, int, double, int, int, int)
    atg_gru: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32", "f64", "i32", "i32", "i32"], result: "void" },
    // atg_gru_cell(int *, int, int, int, int, int, int)
    atg_gru_cell: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_gru_data(int *, int, int, int, int *, int, int, int, double, int, int)
    atg_gru_data: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "i32", "f64", "i32", "i32"], result: "void" },
    // atg_gt(int *, int, int)
    atg_gt: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_gt_(int *, int, int)
    atg_gt_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_gt_scalar_out(int *, int, int, int)
    atg_gt_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_gt_tensor(int *, int, int)
    atg_gt_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_gt_tensor_(int *, int, int)
    atg_gt_tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_gt_tensor_out(int *, int, int, int)
    atg_gt_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_hamming_window(int *, int, int, int)
    atg_hamming_window: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_hamming_window_out(int *, int, int)
    atg_hamming_window_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_hamming_window_periodic(int *, int, int, int, int)
    atg_hamming_window_periodic: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_hamming_window_periodic_alpha(int *, int, int, double, int, int)
    atg_hamming_window_periodic_alpha: { parameters: ["pointer", "i32", "i32", "f64", "i32", "i32"], result: "void" },
    // atg_hamming_window_periodic_alpha_beta(int *, int, int, double, double, int, int)
    atg_hamming_window_periodic_alpha_beta: { parameters: ["pointer", "i32", "i32", "f64", "f64", "i32", "i32"], result: "void" },
    // atg_hamming_window_periodic_alpha_beta_out(int *, int, int, int, double, double)
    atg_hamming_window_periodic_alpha_beta_out: { parameters: ["pointer", "i32", "i32", "i32", "f64", "f64"], result: "void" },
    // atg_hamming_window_periodic_alpha_out(int *, int, int, int, double)
    atg_hamming_window_periodic_alpha_out: { parameters: ["pointer", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_hamming_window_periodic_out(int *, int, int, int)
    atg_hamming_window_periodic_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_hann_window(int *, int, int, int)
    atg_hann_window: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_hann_window_out(int *, int, int)
    atg_hann_window_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_hann_window_periodic(int *, int, int, int, int)
    atg_hann_window_periodic: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_hann_window_periodic_out(int *, int, int, int)
    atg_hann_window_periodic_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_hardshrink(int *, int)
    atg_hardshrink: { parameters: ["pointer", "i32"], result: "void" },
    // atg_hardshrink_backward(int *, int, int, int)
    atg_hardshrink_backward: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_hardshrink_backward_grad_input(int *, int, int, int, int)
    atg_hardshrink_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_hardshrink_out(int *, int, int)
    atg_hardshrink_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_hardsigmoid(int *, int)
    atg_hardsigmoid: { parameters: ["pointer", "i32"], result: "void" },
    // atg_hardsigmoid_(int *, int)
    atg_hardsigmoid_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_hardsigmoid_backward(int *, int, int)
    atg_hardsigmoid_backward: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_hardsigmoid_backward_grad_input(int *, int, int, int)
    atg_hardsigmoid_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_hardsigmoid_out(int *, int, int)
    atg_hardsigmoid_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_hardswish(int *, int)
    atg_hardswish: { parameters: ["pointer", "i32"], result: "void" },
    // atg_hardswish_(int *, int)
    atg_hardswish_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_hardswish_backward(int *, int, int)
    atg_hardswish_backward: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_hardswish_backward_out(int *, int, int, int)
    atg_hardswish_backward_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_hardswish_out(int *, int, int)
    atg_hardswish_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_hardtanh(int *, int)
    atg_hardtanh: { parameters: ["pointer", "i32"], result: "void" },
    // atg_hardtanh_(int *, int)
    atg_hardtanh_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_hardtanh_backward(int *, int, int, int, int)
    atg_hardtanh_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_hardtanh_backward_grad_input(int *, int, int, int, int, int)
    atg_hardtanh_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_hardtanh_out(int *, int, int)
    atg_hardtanh_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_heaviside(int *, int, int)
    atg_heaviside: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_heaviside_(int *, int, int)
    atg_heaviside_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_heaviside_out(int *, int, int, int)
    atg_heaviside_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_hinge_embedding_loss(int *, int, int, double, int)
    atg_hinge_embedding_loss: { parameters: ["pointer", "i32", "i32", "f64", "i32"], result: "void" },
    // atg_histc(int *, int, int)
    atg_histc: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_histc_out(int *, int, int, int)
    atg_histc_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_histogram(int *, int, int, int, int)
    atg_histogram: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_histogram_bin_ct(int *, int, int, double *, int, int, int)
    atg_histogram_bin_ct: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_histogram_bin_ct_out(int *, int, int, int, int, double *, int, int, int)
    atg_histogram_bin_ct_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_histogram_bins_tensor_out(int *, int, int, int, int, int, int)
    atg_histogram_bins_tensor_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_hsplit(int, int)
    atg_hsplit: { parameters: ["i32", "i32"], result: "pointer" },
    // atg_hsplit_array(int, int *, int)
    atg_hsplit_array: { parameters: ["i32", "pointer", "i32"], result: "pointer" },
    // atg_hspmm(int *, int, int)
    atg_hspmm: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_hspmm_out(int *, int, int, int)
    atg_hspmm_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_hstack(int *, int *, int)
    atg_hstack: { parameters: ["pointer", "pointer", "i32"], result: "void" },
    // atg_hstack_out(int *, int, int *, int)
    atg_hstack_out: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_huber_loss(int *, int, int, int, double)
    atg_huber_loss: { parameters: ["pointer", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_huber_loss_backward(int *, int, int, int, int, double)
    atg_huber_loss_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_huber_loss_backward_out(int *, int, int, int, int, int, double)
    atg_huber_loss_backward_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_huber_loss_out(int *, int, int, int, int, double)
    atg_huber_loss_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_hypot(int *, int, int)
    atg_hypot: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_hypot_(int *, int, int)
    atg_hypot_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_hypot_out(int *, int, int, int)
    atg_hypot_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_i0(int *, int)
    atg_i0: { parameters: ["pointer", "i32"], result: "void" },
    // atg_i0_(int *, int)
    atg_i0_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_i0_out(int *, int, int)
    atg_i0_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_igamma(int *, int, int)
    atg_igamma: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_igamma_(int *, int, int)
    atg_igamma_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_igamma_out(int *, int, int, int)
    atg_igamma_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_igammac(int *, int, int)
    atg_igammac: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_igammac_(int *, int, int)
    atg_igammac_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_igammac_out(int *, int, int, int)
    atg_igammac_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_im2col(int *, int, int *, int, int *, int, int *, int, int *, int)
    atg_im2col: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_im2col_out(int *, int, int, int *, int, int *, int, int *, int, int *, int)
    atg_im2col_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_imag(int *, int)
    atg_imag: { parameters: ["pointer", "i32"], result: "void" },
    // atg_index(int *, int, int *, int)
    atg_index: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_index_add(int *, int, int, int, int)
    atg_index_add: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_index_add_(int *, int, int, int, int)
    atg_index_add_: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_index_add_out(int *, int, int, int, int, int)
    atg_index_add_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_index_copy(int *, int, int, int, int)
    atg_index_copy: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_index_copy_(int *, int, int, int, int)
    atg_index_copy_: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_index_copy_out(int *, int, int, int, int, int)
    atg_index_copy_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_index_fill(int *, int, int, int, int)
    atg_index_fill: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_index_fill_(int *, int, int, int, int)
    atg_index_fill_: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_index_fill_int_scalar_out(int *, int, int, int, int, int)
    atg_index_fill_int_scalar_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_index_fill_int_tensor(int *, int, int, int, int)
    atg_index_fill_int_tensor: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_index_fill_int_tensor_(int *, int, int, int, int)
    atg_index_fill_int_tensor_: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_index_fill_int_tensor_out(int *, int, int, int, int, int)
    atg_index_fill_int_tensor_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_index_put(int *, int, int *, int, int, int)
    atg_index_put: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_index_put_(int *, int, int *, int, int, int)
    atg_index_put_: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_index_put_out(int *, int, int, int *, int, int, int)
    atg_index_put_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_index_reduce(int *, int, int, int, int, char *, int, int)
    atg_index_reduce: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_index_reduce_(int *, int, int, int, int, char *, int, int)
    atg_index_reduce_: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_index_reduce_out(int *, int, int, int, int, int, char *, int, int)
    atg_index_reduce_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_index_select(int *, int, int, int)
    atg_index_select: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_index_select_backward(int *, int, int *, int, int, int)
    atg_index_select_backward: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_index_select_out(int *, int, int, int, int)
    atg_index_select_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_index_tensor_out(int *, int, int, int *, int)
    atg_index_tensor_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_indices(int *, int)
    atg_indices: { parameters: ["pointer", "i32"], result: "void" },
    // atg_indices_copy(int *, int)
    atg_indices_copy: { parameters: ["pointer", "i32"], result: "void" },
    // atg_indices_copy_out(int *, int, int)
    atg_indices_copy_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_infinitely_differentiable_gelu_backward(int *, int, int)
    atg_infinitely_differentiable_gelu_backward: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_inner(int *, int, int)
    atg_inner: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_inner_out(int *, int, int, int)
    atg_inner_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_instance_norm(int *, int, int, int, int, int, int, double, double, int)
    atg_instance_norm: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "f64", "i32"], result: "void" },
    // atg_int_repr(int *, int)
    atg_int_repr: { parameters: ["pointer", "i32"], result: "void" },
    // atg_int_repr_out(int *, int, int)
    atg_int_repr_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_inverse(int *, int)
    atg_inverse: { parameters: ["pointer", "i32"], result: "void" },
    // atg_inverse_out(int *, int, int)
    atg_inverse_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_is_coalesced(int)
    atg_is_coalesced: { parameters: ["i32"], result: "i32" },
    // atg_is_complex(int)
    atg_is_complex: { parameters: ["i32"], result: "i32" },
    // atg_is_conj(int)
    atg_is_conj: { parameters: ["i32"], result: "i32" },
    // atg_is_distributed(int)
    atg_is_distributed: { parameters: ["i32"], result: "i32" },
    // atg_is_floating_point(int)
    atg_is_floating_point: { parameters: ["i32"], result: "i32" },
    // atg_is_inference(int)
    atg_is_inference: { parameters: ["i32"], result: "i32" },
    // atg_is_leaf(int)
    atg_is_leaf: { parameters: ["i32"], result: "i32" },
    // atg_is_neg(int)
    atg_is_neg: { parameters: ["i32"], result: "i32" },
    // atg_is_nonzero(int)
    atg_is_nonzero: { parameters: ["i32"], result: "i32" },
    // atg_is_pinned(int, int)
    atg_is_pinned: { parameters: ["i32", "i32"], result: "i32" },
    // atg_is_same_size(int, int)
    atg_is_same_size: { parameters: ["i32", "i32"], result: "i32" },
    // atg_is_set_to(int, int)
    atg_is_set_to: { parameters: ["i32", "i32"], result: "i32" },
    // atg_is_signed(int)
    atg_is_signed: { parameters: ["i32"], result: "i32" },
    // atg_is_vulkan_available()
    atg_is_vulkan_available: { parameters: [], result: "i32" },
    // atg_isclose(int *, int, int, double, double, int)
    atg_isclose: { parameters: ["pointer", "i32", "i32", "f64", "f64", "i32"], result: "void" },
    // atg_isfinite(int *, int)
    atg_isfinite: { parameters: ["pointer", "i32"], result: "void" },
    // atg_isin(int *, int, int, int, int)
    atg_isin: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_isin_scalar_tensor(int *, int, int, int, int)
    atg_isin_scalar_tensor: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_isin_scalar_tensor_out(int *, int, int, int, int, int)
    atg_isin_scalar_tensor_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_isin_tensor_scalar(int *, int, int, int, int)
    atg_isin_tensor_scalar: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_isin_tensor_scalar_out(int *, int, int, int, int, int)
    atg_isin_tensor_scalar_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_isin_tensor_tensor_out(int *, int, int, int, int, int)
    atg_isin_tensor_tensor_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_isinf(int *, int)
    atg_isinf: { parameters: ["pointer", "i32"], result: "void" },
    // atg_isinf_out(int *, int, int)
    atg_isinf_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_isnan(int *, int)
    atg_isnan: { parameters: ["pointer", "i32"], result: "void" },
    // atg_isnan_out(int *, int, int)
    atg_isnan_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_isneginf(int *, int)
    atg_isneginf: { parameters: ["pointer", "i32"], result: "void" },
    // atg_isneginf_out(int *, int, int)
    atg_isneginf_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_isposinf(int *, int)
    atg_isposinf: { parameters: ["pointer", "i32"], result: "void" },
    // atg_isposinf_out(int *, int, int)
    atg_isposinf_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_isreal(int *, int)
    atg_isreal: { parameters: ["pointer", "i32"], result: "void" },
    // atg_istft(int *, int, int, int, int, int, int, int, int, int, int, int, int, int)
    atg_istft: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_kaiser_window(int *, int, int, int)
    atg_kaiser_window: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_kaiser_window_beta(int *, int, int, double, int, int)
    atg_kaiser_window_beta: { parameters: ["pointer", "i32", "i32", "f64", "i32", "i32"], result: "void" },
    // atg_kaiser_window_beta_out(int *, int, int, int, double)
    atg_kaiser_window_beta_out: { parameters: ["pointer", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_kaiser_window_out(int *, int, int)
    atg_kaiser_window_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_kaiser_window_periodic(int *, int, int, int, int)
    atg_kaiser_window_periodic: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_kaiser_window_periodic_out(int *, int, int, int)
    atg_kaiser_window_periodic_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_kl_div(int *, int, int, int, int)
    atg_kl_div: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_kron(int *, int, int)
    atg_kron: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_kron_out(int *, int, int, int)
    atg_kron_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_kthvalue(int *, int, int, int, int)
    atg_kthvalue: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_kthvalue_values(int *, int, int, int, int, int, int)
    atg_kthvalue_values: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_l1_loss(int *, int, int, int)
    atg_l1_loss: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_layer_norm(int *, int, int *, int, int, int, double, int)
    atg_layer_norm: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32", "f64", "i32"], result: "void" },
    // atg_lcm(int *, int, int)
    atg_lcm: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_lcm_(int *, int, int)
    atg_lcm_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_lcm_out(int *, int, int, int)
    atg_lcm_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_ldexp(int *, int, int)
    atg_ldexp: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_ldexp_(int *, int, int)
    atg_ldexp_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_ldexp_out(int *, int, int, int)
    atg_ldexp_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_le(int *, int, int)
    atg_le: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_le_(int *, int, int)
    atg_le_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_le_scalar_out(int *, int, int, int)
    atg_le_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_le_tensor(int *, int, int)
    atg_le_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_le_tensor_(int *, int, int)
    atg_le_tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_le_tensor_out(int *, int, int, int)
    atg_le_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_leaky_relu(int *, int)
    atg_leaky_relu: { parameters: ["pointer", "i32"], result: "void" },
    // atg_leaky_relu_(int *, int)
    atg_leaky_relu_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_leaky_relu_backward(int *, int, int, int, int)
    atg_leaky_relu_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_leaky_relu_backward_grad_input(int *, int, int, int, int, int)
    atg_leaky_relu_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_leaky_relu_out(int *, int, int)
    atg_leaky_relu_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_lerp(int *, int, int, int)
    atg_lerp: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_lerp_(int *, int, int, int)
    atg_lerp_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_lerp_scalar_out(int *, int, int, int, int)
    atg_lerp_scalar_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_lerp_tensor(int *, int, int, int)
    atg_lerp_tensor: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_lerp_tensor_(int *, int, int, int)
    atg_lerp_tensor_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_lerp_tensor_out(int *, int, int, int, int)
    atg_lerp_tensor_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_less(int *, int, int)
    atg_less: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_less_(int *, int, int)
    atg_less_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_less_equal(int *, int, int)
    atg_less_equal: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_less_equal_(int *, int, int)
    atg_less_equal_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_less_equal_scalar_out(int *, int, int, int)
    atg_less_equal_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_less_equal_tensor(int *, int, int)
    atg_less_equal_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_less_equal_tensor_(int *, int, int)
    atg_less_equal_tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_less_equal_tensor_out(int *, int, int, int)
    atg_less_equal_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_less_scalar_out(int *, int, int, int)
    atg_less_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_less_tensor(int *, int, int)
    atg_less_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_less_tensor_(int *, int, int)
    atg_less_tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_less_tensor_out(int *, int, int, int)
    atg_less_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_lgamma(int *, int)
    atg_lgamma: { parameters: ["pointer", "i32"], result: "void" },
    // atg_lgamma_(int *, int)
    atg_lgamma_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_lgamma_out(int *, int, int)
    atg_lgamma_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_lift(int *, int)
    atg_lift: { parameters: ["pointer", "i32"], result: "void" },
    // atg_lift_fresh(int *, int)
    atg_lift_fresh: { parameters: ["pointer", "i32"], result: "void" },
    // atg_lift_fresh_copy(int *, int)
    atg_lift_fresh_copy: { parameters: ["pointer", "i32"], result: "void" },
    // atg_lift_fresh_copy_out(int *, int, int)
    atg_lift_fresh_copy_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_lift_out(int *, int, int)
    atg_lift_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_linalg_cholesky(int *, int, int)
    atg_linalg_cholesky: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_linalg_cholesky_ex(int *, int, int, int)
    atg_linalg_cholesky_ex: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_cholesky_ex_l(int *, int, int, int, int, int)
    atg_linalg_cholesky_ex_l: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_cholesky_out(int *, int, int, int)
    atg_linalg_cholesky_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_cond(int *, int, int)
    atg_linalg_cond: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_linalg_cond_out(int *, int, int, int)
    atg_linalg_cond_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_cond_p_str(int *, int, char *, int)
    atg_linalg_cond_p_str: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_linalg_cond_p_str_out(int *, int, int, char *, int)
    atg_linalg_cond_p_str_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_linalg_cross(int *, int, int, int)
    atg_linalg_cross: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_cross_out(int *, int, int, int, int)
    atg_linalg_cross_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_det(int *, int)
    atg_linalg_det: { parameters: ["pointer", "i32"], result: "void" },
    // atg_linalg_det_out(int *, int, int)
    atg_linalg_det_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_linalg_diagonal(int *, int, int, int, int)
    atg_linalg_diagonal: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_eig(int *, int)
    atg_linalg_eig: { parameters: ["pointer", "i32"], result: "void" },
    // atg_linalg_eig_out(int *, int, int, int)
    atg_linalg_eig_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_eigh(int *, int, char *, int)
    atg_linalg_eigh: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_linalg_eigh_eigvals(int *, int, int, int, char *, int)
    atg_linalg_eigh_eigvals: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_linalg_eigvals(int *, int)
    atg_linalg_eigvals: { parameters: ["pointer", "i32"], result: "void" },
    // atg_linalg_eigvals_out(int *, int, int)
    atg_linalg_eigvals_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_linalg_eigvalsh(int *, int, char *, int)
    atg_linalg_eigvalsh: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_linalg_eigvalsh_out(int *, int, int, char *, int)
    atg_linalg_eigvalsh_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_linalg_householder_product(int *, int, int)
    atg_linalg_householder_product: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_linalg_householder_product_out(int *, int, int, int)
    atg_linalg_householder_product_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_inv(int *, int)
    atg_linalg_inv: { parameters: ["pointer", "i32"], result: "void" },
    // atg_linalg_inv_ex(int *, int, int)
    atg_linalg_inv_ex: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_linalg_inv_ex_inverse(int *, int, int, int, int)
    atg_linalg_inv_ex_inverse: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_inv_out(int *, int, int)
    atg_linalg_inv_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_linalg_ldl_factor(int *, int, int)
    atg_linalg_ldl_factor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_linalg_ldl_factor_ex(int *, int, int, int)
    atg_linalg_ldl_factor_ex: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_ldl_factor_ex_out(int *, int, int, int, int, int, int)
    atg_linalg_ldl_factor_ex_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_ldl_factor_out(int *, int, int, int, int)
    atg_linalg_ldl_factor_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_ldl_solve(int *, int, int, int, int)
    atg_linalg_ldl_solve: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_ldl_solve_out(int *, int, int, int, int, int)
    atg_linalg_ldl_solve_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_lstsq(int *, int, int, double, int, char *, int)
    atg_linalg_lstsq: { parameters: ["pointer", "i32", "i32", "f64", "i32", "pointer", "i32"], result: "void" },
    // atg_linalg_lstsq_out(int *, int, int, int, int, int, int, double, int, char *, int)
    atg_linalg_lstsq_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "i32", "pointer", "i32"], result: "void" },
    // atg_linalg_lu(int *, int, int)
    atg_linalg_lu: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_linalg_lu_factor(int *, int, int)
    atg_linalg_lu_factor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_linalg_lu_factor_ex(int *, int, int, int)
    atg_linalg_lu_factor_ex: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_lu_factor_ex_out(int *, int, int, int, int, int, int)
    atg_linalg_lu_factor_ex_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_lu_factor_out(int *, int, int, int, int)
    atg_linalg_lu_factor_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_lu_out(int *, int, int, int, int, int)
    atg_linalg_lu_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_lu_solve(int *, int, int, int, int, int)
    atg_linalg_lu_solve: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_lu_solve_out(int *, int, int, int, int, int, int)
    atg_linalg_lu_solve_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_matmul(int *, int, int)
    atg_linalg_matmul: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_linalg_matmul_out(int *, int, int, int)
    atg_linalg_matmul_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_matrix_exp(int *, int)
    atg_linalg_matrix_exp: { parameters: ["pointer", "i32"], result: "void" },
    // atg_linalg_matrix_exp_out(int *, int, int)
    atg_linalg_matrix_exp_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_linalg_matrix_power(int *, int, int)
    atg_linalg_matrix_power: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_linalg_matrix_power_out(int *, int, int, int)
    atg_linalg_matrix_power_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_matrix_rank(int *, int, double, int)
    atg_linalg_matrix_rank: { parameters: ["pointer", "i32", "f64", "i32"], result: "void" },
    // atg_linalg_matrix_rank_atol_rtol_float(int *, int, double, int, double, int, int)
    atg_linalg_matrix_rank_atol_rtol_float: { parameters: ["pointer", "i32", "f64", "i32", "f64", "i32", "i32"], result: "void" },
    // atg_linalg_matrix_rank_atol_rtol_float_out(int *, int, int, double, int, double, int, int)
    atg_linalg_matrix_rank_atol_rtol_float_out: { parameters: ["pointer", "i32", "i32", "f64", "i32", "f64", "i32", "i32"], result: "void" },
    // atg_linalg_matrix_rank_atol_rtol_tensor(int *, int, int, int, int)
    atg_linalg_matrix_rank_atol_rtol_tensor: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_matrix_rank_atol_rtol_tensor_out(int *, int, int, int, int, int)
    atg_linalg_matrix_rank_atol_rtol_tensor_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_matrix_rank_out(int *, int, int, double, int)
    atg_linalg_matrix_rank_out: { parameters: ["pointer", "i32", "i32", "f64", "i32"], result: "void" },
    // atg_linalg_matrix_rank_out_tol_tensor(int *, int, int, int, int)
    atg_linalg_matrix_rank_out_tol_tensor: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_matrix_rank_tol_tensor(int *, int, int, int)
    atg_linalg_matrix_rank_tol_tensor: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_multi_dot(int *, int *, int)
    atg_linalg_multi_dot: { parameters: ["pointer", "pointer", "i32"], result: "void" },
    // atg_linalg_multi_dot_out(int *, int, int *, int)
    atg_linalg_multi_dot_out: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_linalg_norm(int *, int, int, int *, int, int, int)
    atg_linalg_norm: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_norm_ord_str(int *, int, char *, int, int *, int, int, int)
    atg_linalg_norm_ord_str: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_norm_ord_str_out(int *, int, int, char *, int, int *, int, int, int)
    atg_linalg_norm_ord_str_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_norm_out(int *, int, int, int, int *, int, int, int)
    atg_linalg_norm_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_pinv(int *, int, double, int)
    atg_linalg_pinv: { parameters: ["pointer", "i32", "f64", "i32"], result: "void" },
    // atg_linalg_pinv_atol_rtol_float(int *, int, double, int, double, int, int)
    atg_linalg_pinv_atol_rtol_float: { parameters: ["pointer", "i32", "f64", "i32", "f64", "i32", "i32"], result: "void" },
    // atg_linalg_pinv_atol_rtol_float_out(int *, int, int, double, int, double, int, int)
    atg_linalg_pinv_atol_rtol_float_out: { parameters: ["pointer", "i32", "i32", "f64", "i32", "f64", "i32", "i32"], result: "void" },
    // atg_linalg_pinv_atol_rtol_tensor(int *, int, int, int, int)
    atg_linalg_pinv_atol_rtol_tensor: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_pinv_atol_rtol_tensor_out(int *, int, int, int, int, int)
    atg_linalg_pinv_atol_rtol_tensor_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_pinv_out(int *, int, int, double, int)
    atg_linalg_pinv_out: { parameters: ["pointer", "i32", "i32", "f64", "i32"], result: "void" },
    // atg_linalg_pinv_out_rcond_tensor(int *, int, int, int, int)
    atg_linalg_pinv_out_rcond_tensor: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_pinv_rcond_tensor(int *, int, int, int)
    atg_linalg_pinv_rcond_tensor: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_qr(int *, int, char *, int)
    atg_linalg_qr: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_linalg_qr_out(int *, int, int, int, char *, int)
    atg_linalg_qr_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_linalg_slogdet(int *, int)
    atg_linalg_slogdet: { parameters: ["pointer", "i32"], result: "void" },
    // atg_linalg_slogdet_out(int *, int, int, int)
    atg_linalg_slogdet_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_solve(int *, int, int, int)
    atg_linalg_solve: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_solve_ex(int *, int, int, int, int)
    atg_linalg_solve_ex: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_solve_ex_out(int *, int, int, int, int, int, int)
    atg_linalg_solve_ex_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_solve_out(int *, int, int, int, int)
    atg_linalg_solve_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_solve_triangular(int *, int, int, int, int, int)
    atg_linalg_solve_triangular: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_solve_triangular_out(int *, int, int, int, int, int, int)
    atg_linalg_solve_triangular_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_svd(int *, int, int, char *, int)
    atg_linalg_svd: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_linalg_svd_u(int *, int, int, int, int, int, char *, int)
    atg_linalg_svd_u: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_linalg_svdvals(int *, int, char *, int)
    atg_linalg_svdvals: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_linalg_svdvals_out(int *, int, int, char *, int)
    atg_linalg_svdvals_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_linalg_tensorinv(int *, int, int)
    atg_linalg_tensorinv: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_linalg_tensorinv_out(int *, int, int, int)
    atg_linalg_tensorinv_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_tensorsolve(int *, int, int, int *, int)
    atg_linalg_tensorsolve: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_linalg_tensorsolve_out(int *, int, int, int, int *, int)
    atg_linalg_tensorsolve_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_linalg_vander(int *, int, int, int)
    atg_linalg_vander: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_vecdot(int *, int, int, int)
    atg_linalg_vecdot: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_linalg_vecdot_out(int *, int, int, int, int)
    atg_linalg_vecdot_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linear(int *, int, int, int)
    atg_linear: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_linear_out(int *, int, int, int, int)
    atg_linear_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linspace(int *, int, int, int, int, int)
    atg_linspace: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_linspace_out(int *, int, int, int, int)
    atg_linspace_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_log(int *, int)
    atg_log: { parameters: ["pointer", "i32"], result: "void" },
    // atg_log10(int *, int)
    atg_log10: { parameters: ["pointer", "i32"], result: "void" },
    // atg_log10_(int *, int)
    atg_log10_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_log10_out(int *, int, int)
    atg_log10_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_log1p(int *, int)
    atg_log1p: { parameters: ["pointer", "i32"], result: "void" },
    // atg_log1p_(int *, int)
    atg_log1p_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_log1p_out(int *, int, int)
    atg_log1p_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_log2(int *, int)
    atg_log2: { parameters: ["pointer", "i32"], result: "void" },
    // atg_log2_(int *, int)
    atg_log2_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_log2_out(int *, int, int)
    atg_log2_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_log_(int *, int)
    atg_log_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_log_normal(int *, int, double, double)
    atg_log_normal: { parameters: ["pointer", "i32", "f64", "f64"], result: "void" },
    // atg_log_normal_(int *, int, double, double)
    atg_log_normal_: { parameters: ["pointer", "i32", "f64", "f64"], result: "void" },
    // atg_log_normal_out(int *, int, int, double, double)
    atg_log_normal_out: { parameters: ["pointer", "i32", "i32", "f64", "f64"], result: "void" },
    // atg_log_out(int *, int, int)
    atg_log_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_log_sigmoid(int *, int)
    atg_log_sigmoid: { parameters: ["pointer", "i32"], result: "void" },
    // atg_log_sigmoid_backward(int *, int, int, int)
    atg_log_sigmoid_backward: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_log_sigmoid_backward_grad_input(int *, int, int, int, int)
    atg_log_sigmoid_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_log_sigmoid_out(int *, int, int)
    atg_log_sigmoid_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_log_softmax(int *, int, int, int)
    atg_log_softmax: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_log_softmax_int_out(int *, int, int, int, int)
    atg_log_softmax_int_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_logaddexp(int *, int, int)
    atg_logaddexp: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_logaddexp2(int *, int, int)
    atg_logaddexp2: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_logaddexp2_out(int *, int, int, int)
    atg_logaddexp2_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_logaddexp_out(int *, int, int, int)
    atg_logaddexp_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_logcumsumexp(int *, int, int)
    atg_logcumsumexp: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_logcumsumexp_out(int *, int, int, int)
    atg_logcumsumexp_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_logdet(int *, int)
    atg_logdet: { parameters: ["pointer", "i32"], result: "void" },
    // atg_logical_and(int *, int, int)
    atg_logical_and: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_logical_and_(int *, int, int)
    atg_logical_and_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_logical_and_out(int *, int, int, int)
    atg_logical_and_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_logical_not(int *, int)
    atg_logical_not: { parameters: ["pointer", "i32"], result: "void" },
    // atg_logical_not_(int *, int)
    atg_logical_not_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_logical_not_out(int *, int, int)
    atg_logical_not_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_logical_or(int *, int, int)
    atg_logical_or: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_logical_or_(int *, int, int)
    atg_logical_or_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_logical_or_out(int *, int, int, int)
    atg_logical_or_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_logical_xor(int *, int, int)
    atg_logical_xor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_logical_xor_(int *, int, int)
    atg_logical_xor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_logical_xor_out(int *, int, int, int)
    atg_logical_xor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_logit(int *, int, double, int)
    atg_logit: { parameters: ["pointer", "i32", "f64", "i32"], result: "void" },
    // atg_logit_(int *, int, double, int)
    atg_logit_: { parameters: ["pointer", "i32", "f64", "i32"], result: "void" },
    // atg_logit_backward(int *, int, int, double, int)
    atg_logit_backward: { parameters: ["pointer", "i32", "i32", "f64", "i32"], result: "void" },
    // atg_logit_backward_grad_input(int *, int, int, int, double, int)
    atg_logit_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "f64", "i32"], result: "void" },
    // atg_logit_out(int *, int, int, double, int)
    atg_logit_out: { parameters: ["pointer", "i32", "i32", "f64", "i32"], result: "void" },
    // atg_logspace(int *, int, int, int, double, int, int)
    atg_logspace: { parameters: ["pointer", "i32", "i32", "i32", "f64", "i32", "i32"], result: "void" },
    // atg_logspace_out(int *, int, int, int, int, double)
    atg_logspace_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_logsumexp(int *, int, int *, int, int)
    atg_logsumexp: { parameters: ["pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_logsumexp_out(int *, int, int, int *, int, int)
    atg_logsumexp_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_lstm(int *, int, int *, int, int *, int, int, int, double, int, int, int)
    atg_lstm: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "f64", "i32", "i32", "i32"], result: "void" },
    // atg_lstm_cell(int *, int, int *, int, int, int, int, int)
    atg_lstm_cell: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_lstm_data(int *, int, int, int *, int, int *, int, int, int, double, int, int)
    atg_lstm_data: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "f64", "i32", "i32"], result: "void" },
    // atg_lstm_mps_backward(int, int *, int, int *, int, int, int, int, int, int, int, int *, int, int *, int, int, int, double, int, int, int)
    atg_lstm_mps_backward: { parameters: ["i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "f64", "i32", "i32", "i32"], result: "void" },
    // atg_lt(int *, int, int)
    atg_lt: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_lt_(int *, int, int)
    atg_lt_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_lt_scalar_out(int *, int, int, int)
    atg_lt_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_lt_tensor(int *, int, int)
    atg_lt_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_lt_tensor_(int *, int, int)
    atg_lt_tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_lt_tensor_out(int *, int, int, int)
    atg_lt_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_lu_solve(int *, int, int, int)
    atg_lu_solve: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_lu_solve_out(int *, int, int, int, int)
    atg_lu_solve_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_lu_unpack(int *, int, int, int, int)
    atg_lu_unpack: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_lu_unpack_out(int *, int, int, int, int, int, int, int)
    atg_lu_unpack_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_margin_ranking_loss(int *, int, int, int, double, int)
    atg_margin_ranking_loss: { parameters: ["pointer", "i32", "i32", "i32", "f64", "i32"], result: "void" },
    // atg_masked_fill(int *, int, int, int)
    atg_masked_fill: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_masked_fill_(int *, int, int, int)
    atg_masked_fill_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_masked_fill_scalar_out(int *, int, int, int, int)
    atg_masked_fill_scalar_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_masked_fill_tensor(int *, int, int, int)
    atg_masked_fill_tensor: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_masked_fill_tensor_(int *, int, int, int)
    atg_masked_fill_tensor_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_masked_fill_tensor_out(int *, int, int, int, int)
    atg_masked_fill_tensor_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_masked_scatter(int *, int, int, int)
    atg_masked_scatter: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_masked_scatter_(int *, int, int, int)
    atg_masked_scatter_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_masked_scatter_out(int *, int, int, int, int)
    atg_masked_scatter_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_masked_select(int *, int, int)
    atg_masked_select: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_masked_select_backward(int *, int, int, int)
    atg_masked_select_backward: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_masked_select_out(int *, int, int, int)
    atg_masked_select_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_matmul(int *, int, int)
    atg_matmul: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_matmul_out(int *, int, int, int)
    atg_matmul_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_matrix_exp(int *, int)
    atg_matrix_exp: { parameters: ["pointer", "i32"], result: "void" },
    // atg_matrix_exp_backward(int *, int, int)
    atg_matrix_exp_backward: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_matrix_h(int *, int)
    atg_matrix_h: { parameters: ["pointer", "i32"], result: "void" },
    // atg_matrix_power(int *, int, int)
    atg_matrix_power: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_matrix_power_out(int *, int, int, int)
    atg_matrix_power_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_max(int *, int)
    atg_max: { parameters: ["pointer", "i32"], result: "void" },
    // atg_max_dim(int *, int, int, int)
    atg_max_dim: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_max_dim_max(int *, int, int, int, int, int)
    atg_max_dim_max: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_max_other(int *, int, int)
    atg_max_other: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_max_out(int *, int, int, int)
    atg_max_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_max_pool1d(int *, int, int *, int, int *, int, int *, int, int *, int, int)
    atg_max_pool1d: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_max_pool1d_with_indices(int *, int, int *, int, int *, int, int *, int, int *, int, int)
    atg_max_pool1d_with_indices: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_max_pool2d(int *, int, int *, int, int *, int, int *, int, int *, int, int)
    atg_max_pool2d: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_max_pool2d_with_indices(int *, int, int *, int, int *, int, int *, int, int *, int, int)
    atg_max_pool2d_with_indices: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_max_pool2d_with_indices_backward(int *, int, int, int *, int, int *, int, int *, int, int *, int, int, int)
    atg_max_pool2d_with_indices_backward: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_max_pool2d_with_indices_backward_grad_input(int *, int, int, int, int *, int, int *, int, int *, int, int *, int, int, int)
    atg_max_pool2d_with_indices_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_max_pool2d_with_indices_out(int *, int, int, int, int *, int, int *, int, int *, int, int *, int, int)
    atg_max_pool2d_with_indices_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_max_pool3d(int *, int, int *, int, int *, int, int *, int, int *, int, int)
    atg_max_pool3d: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_max_pool3d_with_indices(int *, int, int *, int, int *, int, int *, int, int *, int, int)
    atg_max_pool3d_with_indices: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_max_pool3d_with_indices_backward(int *, int, int, int *, int, int *, int, int *, int, int *, int, int, int)
    atg_max_pool3d_with_indices_backward: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_max_pool3d_with_indices_backward_grad_input(int *, int, int, int, int *, int, int *, int, int *, int, int *, int, int, int)
    atg_max_pool3d_with_indices_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_max_pool3d_with_indices_out(int *, int, int, int, int *, int, int *, int, int *, int, int *, int, int)
    atg_max_pool3d_with_indices_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_max_unpool2d(int *, int, int, int *, int)
    atg_max_unpool2d: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_max_unpool2d_out(int *, int, int, int, int *, int)
    atg_max_unpool2d_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_max_unpool3d(int *, int, int, int *, int, int *, int, int *, int)
    atg_max_unpool3d: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_max_unpool3d_out(int *, int, int, int, int *, int, int *, int, int *, int)
    atg_max_unpool3d_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_maximum(int *, int, int)
    atg_maximum: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_maximum_out(int *, int, int, int)
    atg_maximum_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_mean(int *, int, int)
    atg_mean: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_mean_dim(int *, int, int *, int, int, int)
    atg_mean_dim: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_mean_out(int *, int, int, int *, int, int, int)
    atg_mean_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_median(int *, int)
    atg_median: { parameters: ["pointer", "i32"], result: "void" },
    // atg_median_dim(int *, int, int, int)
    atg_median_dim: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_median_dim_values(int *, int, int, int, int, int)
    atg_median_dim_values: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_median_out(int *, int, int)
    atg_median_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_meshgrid(int *, int)
    atg_meshgrid: { parameters: ["pointer", "i32"], result: "pointer" },
    // atg_meshgrid_indexing(int *, int, char *, int)
    atg_meshgrid_indexing: { parameters: ["pointer", "i32", "pointer", "i32"], result: "pointer" },
    // atg_mh(int *, int)
    atg_mh: { parameters: ["pointer", "i32"], result: "void" },
    // atg_min(int *, int)
    atg_min: { parameters: ["pointer", "i32"], result: "void" },
    // atg_min_dim(int *, int, int, int)
    atg_min_dim: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_min_dim_min(int *, int, int, int, int, int)
    atg_min_dim_min: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_min_other(int *, int, int)
    atg_min_other: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_min_out(int *, int, int, int)
    atg_min_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_minimum(int *, int, int)
    atg_minimum: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_minimum_out(int *, int, int, int)
    atg_minimum_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_miopen_batch_norm(int *, int, int, int, int, int, int, double, double)
    atg_miopen_batch_norm: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "f64"], result: "void" },
    // atg_miopen_batch_norm_backward(int *, int, int, int, int, int, int, int, double)
    atg_miopen_batch_norm_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_miopen_batch_norm_backward_out(int *, int, int, int, int, int, int, int, int, int, int, double)
    atg_miopen_batch_norm_backward_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_miopen_batch_norm_out(int *, int, int, int, int, int, int, int, int, int, double, double)
    atg_miopen_batch_norm_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "f64"], result: "void" },
    // atg_miopen_convolution(int *, int, int, int, int *, int, int *, int, int *, int, int, int, int)
    atg_miopen_convolution: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_miopen_convolution_add_relu(int *, int, int, int, int, int, int *, int, int *, int, int *, int, int)
    atg_miopen_convolution_add_relu: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_miopen_convolution_out(int *, int, int, int, int, int *, int, int *, int, int *, int, int, int, int)
    atg_miopen_convolution_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_miopen_convolution_relu(int *, int, int, int, int *, int, int *, int, int *, int, int)
    atg_miopen_convolution_relu: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_miopen_convolution_transpose(int *, int, int, int, int *, int, int *, int, int *, int, int *, int, int, int, int)
    atg_miopen_convolution_transpose: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_miopen_convolution_transpose_out(int *, int, int, int, int, int *, int, int *, int, int *, int, int *, int, int, int, int)
    atg_miopen_convolution_transpose_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_miopen_depthwise_convolution(int *, int, int, int, int *, int, int *, int, int *, int, int, int, int)
    atg_miopen_depthwise_convolution: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_miopen_depthwise_convolution_out(int *, int, int, int, int, int *, int, int *, int, int *, int, int, int, int)
    atg_miopen_depthwise_convolution_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_miopen_rnn(int *, int, int *, int, int, int, int, int, int, int, int, double, int, int, int *, int, int)
    atg_miopen_rnn: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_miopen_rnn_out(int *, int, int, int, int, int, int, int *, int, int, int, int, int, int, int, int, double, int, int, int *, int, int)
    atg_miopen_rnn_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_mish(int *, int)
    atg_mish: { parameters: ["pointer", "i32"], result: "void" },
    // atg_mish_(int *, int)
    atg_mish_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_mish_backward(int *, int, int)
    atg_mish_backward: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_mish_out(int *, int, int)
    atg_mish_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_mkldnn_adaptive_avg_pool2d(int *, int, int *, int)
    atg_mkldnn_adaptive_avg_pool2d: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_mkldnn_adaptive_avg_pool2d_backward(int *, int, int)
    atg_mkldnn_adaptive_avg_pool2d_backward: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_mkldnn_adaptive_avg_pool2d_backward_out(int *, int, int, int)
    atg_mkldnn_adaptive_avg_pool2d_backward_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_mkldnn_adaptive_avg_pool2d_out(int *, int, int, int *, int)
    atg_mkldnn_adaptive_avg_pool2d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_mkldnn_convolution(int *, int, int, int, int *, int, int *, int, int *, int, int)
    atg_mkldnn_convolution: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_mkldnn_convolution_out(int *, int, int, int, int, int *, int, int *, int, int *, int, int)
    atg_mkldnn_convolution_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_mkldnn_linear(int *, int, int, int)
    atg_mkldnn_linear: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_mkldnn_linear_backward_input(int *, int *, int, int, int)
    atg_mkldnn_linear_backward_input: { parameters: ["pointer", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_mkldnn_linear_backward_input_out(int *, int, int *, int, int, int)
    atg_mkldnn_linear_backward_input_out: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_mkldnn_linear_backward_weights(int *, int, int, int, int)
    atg_mkldnn_linear_backward_weights: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_mkldnn_linear_backward_weights_out(int *, int, int, int, int, int, int)
    atg_mkldnn_linear_backward_weights_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_mkldnn_linear_out(int *, int, int, int, int)
    atg_mkldnn_linear_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_mkldnn_max_pool2d(int *, int, int *, int, int *, int, int *, int, int *, int, int)
    atg_mkldnn_max_pool2d: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_mkldnn_max_pool2d_backward(int *, int, int, int, int *, int, int *, int, int *, int, int *, int, int)
    atg_mkldnn_max_pool2d_backward: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_mkldnn_max_pool2d_backward_out(int *, int, int, int, int, int *, int, int *, int, int *, int, int *, int, int)
    atg_mkldnn_max_pool2d_backward_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_mkldnn_max_pool2d_out(int *, int, int, int *, int, int *, int, int *, int, int *, int, int)
    atg_mkldnn_max_pool2d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_mkldnn_max_pool3d(int *, int, int *, int, int *, int, int *, int, int *, int, int)
    atg_mkldnn_max_pool3d: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_mkldnn_max_pool3d_backward(int *, int, int, int, int *, int, int *, int, int *, int, int *, int, int)
    atg_mkldnn_max_pool3d_backward: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_mkldnn_max_pool3d_backward_out(int *, int, int, int, int, int *, int, int *, int, int *, int, int *, int, int)
    atg_mkldnn_max_pool3d_backward_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_mkldnn_max_pool3d_out(int *, int, int, int *, int, int *, int, int *, int, int *, int, int)
    atg_mkldnn_max_pool3d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_mkldnn_reorder_conv2d_weight(int *, int, int *, int, int *, int, int *, int, int)
    atg_mkldnn_reorder_conv2d_weight: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_mkldnn_reorder_conv2d_weight_out(int *, int, int, int *, int, int *, int, int *, int, int)
    atg_mkldnn_reorder_conv2d_weight_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_mkldnn_reorder_conv3d_weight(int *, int, int *, int, int *, int, int *, int, int)
    atg_mkldnn_reorder_conv3d_weight: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_mkldnn_reorder_conv3d_weight_out(int *, int, int, int *, int, int *, int, int *, int, int)
    atg_mkldnn_reorder_conv3d_weight_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_mm(int *, int, int)
    atg_mm: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_mm_out(int *, int, int, int)
    atg_mm_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_mode(int *, int, int, int)
    atg_mode: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_mode_values(int *, int, int, int, int, int)
    atg_mode_values: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_moveaxis(int *, int, int *, int, int *, int)
    atg_moveaxis: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_moveaxis_int(int *, int, int, int)
    atg_moveaxis_int: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_movedim(int *, int, int *, int, int *, int)
    atg_movedim: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_movedim_int(int *, int, int, int)
    atg_movedim_int: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_mps_max_pool2d_backward(int *, int, int, int *, int, int *, int, int *, int, int *, int, int)
    atg_mps_max_pool2d_backward: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_mps_max_pool2d_backward_out(int *, int, int, int, int *, int, int *, int, int *, int, int *, int, int)
    atg_mps_max_pool2d_backward_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_mse_loss(int *, int, int, int)
    atg_mse_loss: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_mse_loss_backward(int *, int, int, int, int)
    atg_mse_loss_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_mse_loss_backward_grad_input(int *, int, int, int, int, int)
    atg_mse_loss_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_mse_loss_out(int *, int, int, int, int)
    atg_mse_loss_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_msort(int *, int)
    atg_msort: { parameters: ["pointer", "i32"], result: "void" },
    // atg_msort_out(int *, int, int)
    atg_msort_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_mt(int *, int)
    atg_mt: { parameters: ["pointer", "i32"], result: "void" },
    // atg_mul(int *, int, int)
    atg_mul: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_mul_(int *, int, int)
    atg_mul_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_mul_out(int *, int, int, int)
    atg_mul_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_mul_scalar(int *, int, int)
    atg_mul_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_mul_scalar_(int *, int, int)
    atg_mul_scalar_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_mul_scalar_out(int *, int, int, int)
    atg_mul_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_multi_margin_loss_backward(int *, int, int, int, int, int, int, int)
    atg_multi_margin_loss_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_multi_margin_loss_backward_grad_input(int *, int, int, int, int, int, int, int, int)
    atg_multi_margin_loss_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_multilabel_margin_loss(int *, int, int, int)
    atg_multilabel_margin_loss: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_multilabel_margin_loss_backward(int *, int, int, int, int, int)
    atg_multilabel_margin_loss_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_multilabel_margin_loss_backward_grad_input(int *, int, int, int, int, int, int)
    atg_multilabel_margin_loss_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_multilabel_margin_loss_out(int *, int, int, int, int)
    atg_multilabel_margin_loss_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_multinomial(int *, int, int, int)
    atg_multinomial: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_multinomial_out(int *, int, int, int, int)
    atg_multinomial_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_multiply(int *, int, int)
    atg_multiply: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_multiply_(int *, int, int)
    atg_multiply_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_multiply_out(int *, int, int, int)
    atg_multiply_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_multiply_scalar(int *, int, int)
    atg_multiply_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_multiply_scalar_(int *, int, int)
    atg_multiply_scalar_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_mv(int *, int, int)
    atg_mv: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_mv_out(int *, int, int, int)
    atg_mv_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_mvlgamma(int *, int, int)
    atg_mvlgamma: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_mvlgamma_(int *, int, int)
    atg_mvlgamma_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_mvlgamma_out(int *, int, int, int)
    atg_mvlgamma_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_nan_to_num(int *, int, double, int, double, int, double, int)
    atg_nan_to_num: { parameters: ["pointer", "i32", "f64", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_nan_to_num_(int *, int, double, int, double, int, double, int)
    atg_nan_to_num_: { parameters: ["pointer", "i32", "f64", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_nan_to_num_out(int *, int, int, double, int, double, int, double, int)
    atg_nan_to_num_out: { parameters: ["pointer", "i32", "i32", "f64", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_nanmean(int *, int, int *, int, int, int)
    atg_nanmean: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_nanmean_out(int *, int, int, int *, int, int, int)
    atg_nanmean_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_nanmedian(int *, int)
    atg_nanmedian: { parameters: ["pointer", "i32"], result: "void" },
    // atg_nanmedian_dim(int *, int, int, int)
    atg_nanmedian_dim: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_nanmedian_dim_values(int *, int, int, int, int, int)
    atg_nanmedian_dim_values: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_nanmedian_out(int *, int, int)
    atg_nanmedian_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_nanquantile(int *, int, int, int, int, int, char *, int)
    atg_nanquantile: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_nanquantile_out(int *, int, int, int, int, int, int, char *, int)
    atg_nanquantile_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_nanquantile_scalar(int *, int, double, int, int, int, char *, int)
    atg_nanquantile_scalar: { parameters: ["pointer", "i32", "f64", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_nanquantile_scalar_out(int *, int, int, double, int, int, int, char *, int)
    atg_nanquantile_scalar_out: { parameters: ["pointer", "i32", "i32", "f64", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_nansum(int *, int, int *, int, int, int)
    atg_nansum: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_nansum_out(int *, int, int, int *, int, int, int)
    atg_nansum_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_narrow(int *, int, int, int, int)
    atg_narrow: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_narrow_copy(int *, int, int, int, int)
    atg_narrow_copy: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_narrow_copy_out(int *, int, int, int, int, int)
    atg_narrow_copy_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_narrow_tensor(int *, int, int, int, int)
    atg_narrow_tensor: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_native_batch_norm(int *, int, int, int, int, int, int, double, double)
    atg_native_batch_norm: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "f64"], result: "void" },
    // atg_native_batch_norm_out(int *, int, int, int, int, int, int, int, int, int, double, double)
    atg_native_batch_norm_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "f64"], result: "void" },
    // atg_native_channel_shuffle(int *, int, int)
    atg_native_channel_shuffle: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_native_dropout(int *, int, double, int)
    atg_native_dropout: { parameters: ["pointer", "i32", "f64", "i32"], result: "void" },
    // atg_native_dropout_backward(int *, int, int, double)
    atg_native_dropout_backward: { parameters: ["pointer", "i32", "i32", "f64"], result: "void" },
    // atg_native_dropout_backward_out(int *, int, int, int, double)
    atg_native_dropout_backward_out: { parameters: ["pointer", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_native_dropout_out(int *, int, int, int, double, int)
    atg_native_dropout_out: { parameters: ["pointer", "i32", "i32", "i32", "f64", "i32"], result: "void" },
    // atg_native_group_norm(int *, int, int, int, int, int, int, int, double)
    atg_native_group_norm: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_native_group_norm_out(int *, int, int, int, int, int, int, int, int, int, int, double)
    atg_native_group_norm_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_native_layer_norm(int *, int, int *, int, int, int, double)
    atg_native_layer_norm: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_native_layer_norm_out(int *, int, int, int, int, int *, int, int, int, double)
    atg_native_layer_norm_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_native_norm(int *, int)
    atg_native_norm: { parameters: ["pointer", "i32"], result: "void" },
    // atg_native_norm_out(int *, int, int)
    atg_native_norm_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_native_norm_scalaropt_dim_dtype(int *, int, int, int *, int, int, int)
    atg_native_norm_scalaropt_dim_dtype: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_native_norm_scalaropt_dim_dtype_out(int *, int, int, int, int *, int, int, int)
    atg_native_norm_scalaropt_dim_dtype_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_ne(int *, int, int)
    atg_ne: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_ne_(int *, int, int)
    atg_ne_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_ne_scalar_out(int *, int, int, int)
    atg_ne_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_ne_tensor(int *, int, int)
    atg_ne_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_ne_tensor_(int *, int, int)
    atg_ne_tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_ne_tensor_out(int *, int, int, int)
    atg_ne_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_neg(int *, int)
    atg_neg: { parameters: ["pointer", "i32"], result: "void" },
    // atg_neg_(int *, int)
    atg_neg_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_neg_out(int *, int, int)
    atg_neg_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_negative(int *, int)
    atg_negative: { parameters: ["pointer", "i32"], result: "void" },
    // atg_negative_(int *, int)
    atg_negative_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_negative_out(int *, int, int)
    atg_negative_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_nested_to_padded_tensor(int *, int, double, int *, int)
    atg_nested_to_padded_tensor: { parameters: ["pointer", "i32", "f64", "pointer", "i32"], result: "void" },
    // atg_new_empty(int *, int, int *, int, int, int)
    atg_new_empty: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_new_empty_out(int *, int, int, int *, int)
    atg_new_empty_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_new_empty_strided(int *, int, int *, int, int *, int, int, int)
    atg_new_empty_strided: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_new_empty_strided_out(int *, int, int, int *, int, int *, int)
    atg_new_empty_strided_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_new_full(int *, int, int *, int, int, int, int)
    atg_new_full: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_new_full_out(int *, int, int, int *, int, int)
    atg_new_full_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_new_ones(int *, int, int *, int, int, int)
    atg_new_ones: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_new_ones_out(int *, int, int, int *, int)
    atg_new_ones_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_new_zeros(int *, int, int *, int, int, int)
    atg_new_zeros: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_new_zeros_out(int *, int, int, int *, int)
    atg_new_zeros_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_nextafter(int *, int, int)
    atg_nextafter: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_nextafter_(int *, int, int)
    atg_nextafter_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_nextafter_out(int *, int, int, int)
    atg_nextafter_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_nll_loss(int *, int, int, int, int, int)
    atg_nll_loss: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_nll_loss2d(int *, int, int, int, int, int)
    atg_nll_loss2d: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_nll_loss2d_backward(int *, int, int, int, int, int, int, int)
    atg_nll_loss2d_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_nll_loss2d_backward_grad_input(int *, int, int, int, int, int, int, int, int)
    atg_nll_loss2d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_nll_loss2d_out(int *, int, int, int, int, int, int)
    atg_nll_loss2d_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_nll_loss_backward(int *, int, int, int, int, int, int, int)
    atg_nll_loss_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_nll_loss_backward_grad_input(int *, int, int, int, int, int, int, int, int)
    atg_nll_loss_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_nll_loss_nd(int *, int, int, int, int, int)
    atg_nll_loss_nd: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_nll_loss_out(int *, int, int, int, int, int, int)
    atg_nll_loss_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_nonzero(int *, int)
    atg_nonzero: { parameters: ["pointer", "i32"], result: "void" },
    // atg_nonzero_numpy(int)
    atg_nonzero_numpy: { parameters: ["i32"], result: "pointer" },
    // atg_nonzero_out(int *, int, int)
    atg_nonzero_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_norm(int *, int)
    atg_norm: { parameters: ["pointer", "i32"], result: "void" },
    // atg_norm_dtype_out(int *, int, int, int, int *, int, int, int)
    atg_norm_dtype_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_norm_except_dim(int *, int, int, int)
    atg_norm_except_dim: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_norm_out(int *, int, int, int, int *, int, int)
    atg_norm_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_norm_scalar_out(int *, int, int)
    atg_norm_scalar_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_norm_scalaropt_dim(int *, int, int, int *, int, int)
    atg_norm_scalaropt_dim: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_norm_scalaropt_dim_dtype(int *, int, int, int *, int, int, int)
    atg_norm_scalaropt_dim_dtype: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_norm_scalaropt_dtype(int *, int, int, int)
    atg_norm_scalaropt_dtype: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_norm_scalaropt_dtype_out(int *, int, int, int, int)
    atg_norm_scalaropt_dtype_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_normal_(int *, int, double, double)
    atg_normal_: { parameters: ["pointer", "i32", "f64", "f64"], result: "void" },
    // atg_normal_functional(int *, int, double, double)
    atg_normal_functional: { parameters: ["pointer", "i32", "f64", "f64"], result: "void" },
    // atg_not_equal(int *, int, int)
    atg_not_equal: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_not_equal_(int *, int, int)
    atg_not_equal_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_not_equal_scalar_out(int *, int, int, int)
    atg_not_equal_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_not_equal_tensor(int *, int, int)
    atg_not_equal_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_not_equal_tensor_(int *, int, int)
    atg_not_equal_tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_not_equal_tensor_out(int *, int, int, int)
    atg_not_equal_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_nuclear_norm(int *, int, int)
    atg_nuclear_norm: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_nuclear_norm_dim(int *, int, int *, int, int)
    atg_nuclear_norm_dim: { parameters: ["pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_nuclear_norm_dim_out(int *, int, int, int *, int, int)
    atg_nuclear_norm_dim_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_nuclear_norm_out(int *, int, int, int)
    atg_nuclear_norm_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_numpy_t(int *, int)
    atg_numpy_t: { parameters: ["pointer", "i32"], result: "void" },
    // atg_one_hot(int *, int, int)
    atg_one_hot: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_ones(int *, int *, int, int, int)
    atg_ones: { parameters: ["pointer", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_ones_like(int *, int)
    atg_ones_like: { parameters: ["pointer", "i32"], result: "void" },
    // atg_ones_like_out(int *, int, int)
    atg_ones_like_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_ones_out(int *, int, int *, int)
    atg_ones_out: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_orgqr(int *, int, int)
    atg_orgqr: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_orgqr_out(int *, int, int, int)
    atg_orgqr_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_ormqr(int *, int, int, int, int, int)
    atg_ormqr: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_ormqr_out(int *, int, int, int, int, int, int)
    atg_ormqr_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_outer(int *, int, int)
    atg_outer: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_outer_out(int *, int, int, int)
    atg_outer_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_output_nr(int)
    atg_output_nr: { parameters: ["i32"], result: "i32" },
    // atg_pad(int *, int, int *, int, char *, int, double, int)
    atg_pad: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "f64", "i32"], result: "void" },
    // atg_pad_sequence(int *, int *, int, int, double)
    atg_pad_sequence: { parameters: ["pointer", "pointer", "i32", "i32", "f64"], result: "void" },
    // atg_pairwise_distance(int *, int, int, double, double, int)
    atg_pairwise_distance: { parameters: ["pointer", "i32", "i32", "f64", "f64", "i32"], result: "void" },
    // atg_pdist(int *, int, double)
    atg_pdist: { parameters: ["pointer", "i32", "f64"], result: "void" },
    // atg_permute(int *, int, int *, int)
    atg_permute: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_permute_copy(int *, int, int *, int)
    atg_permute_copy: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_permute_copy_out(int *, int, int, int *, int)
    atg_permute_copy_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_pin_memory(int *, int, int)
    atg_pin_memory: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_pinverse(int *, int, double)
    atg_pinverse: { parameters: ["pointer", "i32", "f64"], result: "void" },
    // atg_pixel_shuffle(int *, int, int)
    atg_pixel_shuffle: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_pixel_shuffle_out(int *, int, int, int)
    atg_pixel_shuffle_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_pixel_unshuffle(int *, int, int)
    atg_pixel_unshuffle: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_pixel_unshuffle_out(int *, int, int, int)
    atg_pixel_unshuffle_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_poisson(int *, int)
    atg_poisson: { parameters: ["pointer", "i32"], result: "void" },
    // atg_poisson_nll_loss(int *, int, int, int, int, double, int)
    atg_poisson_nll_loss: { parameters: ["pointer", "i32", "i32", "i32", "i32", "f64", "i32"], result: "void" },
    // atg_poisson_out(int *, int, int)
    atg_poisson_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_polar(int *, int, int)
    atg_polar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_polar_out(int *, int, int, int)
    atg_polar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_polygamma(int *, int, int)
    atg_polygamma: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_polygamma_(int *, int, int)
    atg_polygamma_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_polygamma_out(int *, int, int, int)
    atg_polygamma_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_positive(int *, int)
    atg_positive: { parameters: ["pointer", "i32"], result: "void" },
    // atg_pow(int *, int, int)
    atg_pow: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_pow_(int *, int, int)
    atg_pow_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_pow_scalar(int *, int, int)
    atg_pow_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_pow_scalar_out(int *, int, int, int)
    atg_pow_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_pow_tensor_(int *, int, int)
    atg_pow_tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_pow_tensor_scalar(int *, int, int)
    atg_pow_tensor_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_pow_tensor_scalar_out(int *, int, int, int)
    atg_pow_tensor_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_pow_tensor_tensor_out(int *, int, int, int)
    atg_pow_tensor_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_prelu(int *, int, int)
    atg_prelu: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_prelu_backward(int *, int, int, int)
    atg_prelu_backward: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_prelu_backward_out(int *, int, int, int, int, int)
    atg_prelu_backward_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_prelu_out(int *, int, int, int)
    atg_prelu_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_prod(int *, int, int)
    atg_prod: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_prod_dim_int(int *, int, int, int, int)
    atg_prod_dim_int: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_prod_int_out(int *, int, int, int, int, int)
    atg_prod_int_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_prod_out(int *, int, int, int)
    atg_prod_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_put(int *, int, int, int, int)
    atg_put: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_put_(int *, int, int, int, int)
    atg_put_: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_put_out(int *, int, int, int, int, int)
    atg_put_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_q_per_channel_axis(int)
    atg_q_per_channel_axis: { parameters: ["i32"], result: "i32" },
    // atg_q_per_channel_scales(int *, int)
    atg_q_per_channel_scales: { parameters: ["pointer", "i32"], result: "void" },
    // atg_q_per_channel_scales_out(int *, int, int)
    atg_q_per_channel_scales_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_q_per_channel_zero_points(int *, int)
    atg_q_per_channel_zero_points: { parameters: ["pointer", "i32"], result: "void" },
    // atg_q_per_channel_zero_points_out(int *, int, int)
    atg_q_per_channel_zero_points_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_q_scale(int)
    atg_q_scale: { parameters: ["i32"], result: "f64" },
    // atg_q_zero_point(int)
    atg_q_zero_point: { parameters: ["i32"], result: "i32" },
    // atg_qr(int *, int, int)
    atg_qr: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_qr_q(int *, int, int, int, int)
    atg_qr_q: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_quantile(int *, int, int, int, int, int, char *, int)
    atg_quantile: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_quantile_out(int *, int, int, int, int, int, int, char *, int)
    atg_quantile_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_quantile_scalar(int *, int, double, int, int, int, char *, int)
    atg_quantile_scalar: { parameters: ["pointer", "i32", "f64", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_quantile_scalar_out(int *, int, int, double, int, int, int, char *, int)
    atg_quantile_scalar_out: { parameters: ["pointer", "i32", "i32", "f64", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_quantize_per_channel(int *, int, int, int, int, int)
    atg_quantize_per_channel: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_quantize_per_channel_out(int *, int, int, int, int, int, int)
    atg_quantize_per_channel_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_quantize_per_tensor(int *, int, double, int, int)
    atg_quantize_per_tensor: { parameters: ["pointer", "i32", "f64", "i32", "i32"], result: "void" },
    // atg_quantize_per_tensor_dynamic(int *, int, int, int)
    atg_quantize_per_tensor_dynamic: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_quantize_per_tensor_dynamic_out(int *, int, int, int, int)
    atg_quantize_per_tensor_dynamic_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_quantize_per_tensor_out(int *, int, int, double, int, int)
    atg_quantize_per_tensor_out: { parameters: ["pointer", "i32", "i32", "f64", "i32", "i32"], result: "void" },
    // atg_quantize_per_tensor_tensor_qparams(int *, int, int, int, int)
    atg_quantize_per_tensor_tensor_qparams: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_quantize_per_tensor_tensor_qparams_out(int *, int, int, int, int, int)
    atg_quantize_per_tensor_tensor_qparams_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_quantize_per_tensor_tensors(int *, int, int, int, int)
    atg_quantize_per_tensor_tensors: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "pointer" },
    // atg_quantize_per_tensor_tensors_out(int *, int, int *, int, int, int, int)
    atg_quantize_per_tensor_tensors_out: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_quantized_batch_norm(int *, int, int, int, int, int, double, double, int)
    atg_quantized_batch_norm: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "f64", "f64", "i32"], result: "void" },
    // atg_quantized_batch_norm_out(int *, int, int, int, int, int, int, double, double, int)
    atg_quantized_batch_norm_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "f64", "f64", "i32"], result: "void" },
    // atg_quantized_gru_cell(int *, int, int, int, int, int, int, int, int, int, int, int, int, int, int)
    atg_quantized_gru_cell: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_quantized_lstm_cell(int *, int, int *, int, int, int, int, int, int, int, int, int, int, int, int, int)
    atg_quantized_lstm_cell: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_quantized_max_pool1d(int *, int, int *, int, int *, int, int *, int, int *, int, int)
    atg_quantized_max_pool1d: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_quantized_max_pool1d_out(int *, int, int, int *, int, int *, int, int *, int, int *, int, int)
    atg_quantized_max_pool1d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_quantized_max_pool2d(int *, int, int *, int, int *, int, int *, int, int *, int, int)
    atg_quantized_max_pool2d: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_quantized_max_pool2d_out(int *, int, int, int *, int, int *, int, int *, int, int *, int, int)
    atg_quantized_max_pool2d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_quantized_rnn_relu_cell(int *, int, int, int, int, int, int, int, int, int, int, int, int, int, int)
    atg_quantized_rnn_relu_cell: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_quantized_rnn_tanh_cell(int *, int, int, int, int, int, int, int, int, int, int, int, int, int, int)
    atg_quantized_rnn_tanh_cell: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_rad2deg(int *, int)
    atg_rad2deg: { parameters: ["pointer", "i32"], result: "void" },
    // atg_rad2deg_(int *, int)
    atg_rad2deg_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_rad2deg_out(int *, int, int)
    atg_rad2deg_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_rand(int *, int *, int, int, int)
    atg_rand: { parameters: ["pointer", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_rand_like(int *, int)
    atg_rand_like: { parameters: ["pointer", "i32"], result: "void" },
    // atg_rand_like_out(int *, int, int)
    atg_rand_like_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_rand_out(int *, int, int *, int)
    atg_rand_out: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_randint(int *, int, int *, int, int, int)
    atg_randint: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_randint_like(int *, int, int)
    atg_randint_like: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_randint_like_low_dtype(int *, int, int, int)
    atg_randint_like_low_dtype: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_randint_like_low_dtype_out(int *, int, int, int, int)
    atg_randint_like_low_dtype_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_randint_like_out(int *, int, int, int)
    atg_randint_like_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_randint_low(int *, int, int, int *, int, int, int)
    atg_randint_low: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_randint_low_out(int *, int, int, int, int *, int)
    atg_randint_low_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_randint_out(int *, int, int, int *, int)
    atg_randint_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_randn(int *, int *, int, int, int)
    atg_randn: { parameters: ["pointer", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_randn_like(int *, int)
    atg_randn_like: { parameters: ["pointer", "i32"], result: "void" },
    // atg_randn_like_out(int *, int, int)
    atg_randn_like_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_randn_out(int *, int, int *, int)
    atg_randn_out: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_random(int *, int)
    atg_random: { parameters: ["pointer", "i32"], result: "void" },
    // atg_random_(int *, int)
    atg_random_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_random_from(int *, int, int, int, int)
    atg_random_from: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_random_from_(int *, int, int, int, int)
    atg_random_from_: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_random_from_out(int *, int, int, int, int, int)
    atg_random_from_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_random_out(int *, int, int)
    atg_random_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_random_to(int *, int, int)
    atg_random_to: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_random_to_(int *, int, int)
    atg_random_to_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_random_to_out(int *, int, int, int)
    atg_random_to_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_randperm(int *, int, int, int)
    atg_randperm: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_randperm_out(int *, int, int)
    atg_randperm_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_range(int *, int, int, int, int)
    atg_range: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_range_out(int *, int, int, int)
    atg_range_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_range_out_(int *, int, int, int)
    atg_range_out_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_range_step(int *, int, int, int, int)
    atg_range_step: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_ravel(int *, int)
    atg_ravel: { parameters: ["pointer", "i32"], result: "void" },
    // atg_real(int *, int)
    atg_real: { parameters: ["pointer", "i32"], result: "void" },
    // atg_reciprocal(int *, int)
    atg_reciprocal: { parameters: ["pointer", "i32"], result: "void" },
    // atg_reciprocal_(int *, int)
    atg_reciprocal_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_reciprocal_out(int *, int, int)
    atg_reciprocal_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_reflection_pad1d(int *, int, int *, int)
    atg_reflection_pad1d: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_reflection_pad1d_backward(int *, int, int, int *, int)
    atg_reflection_pad1d_backward: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_reflection_pad1d_backward_grad_input(int *, int, int, int, int *, int)
    atg_reflection_pad1d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_reflection_pad1d_out(int *, int, int, int *, int)
    atg_reflection_pad1d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_reflection_pad2d(int *, int, int *, int)
    atg_reflection_pad2d: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_reflection_pad2d_backward(int *, int, int, int *, int)
    atg_reflection_pad2d_backward: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_reflection_pad2d_backward_grad_input(int *, int, int, int, int *, int)
    atg_reflection_pad2d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_reflection_pad2d_out(int *, int, int, int *, int)
    atg_reflection_pad2d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_reflection_pad3d(int *, int, int *, int)
    atg_reflection_pad3d: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_reflection_pad3d_backward(int *, int, int, int *, int)
    atg_reflection_pad3d_backward: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_reflection_pad3d_backward_grad_input(int *, int, int, int, int *, int)
    atg_reflection_pad3d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_reflection_pad3d_out(int *, int, int, int *, int)
    atg_reflection_pad3d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_relu(int *, int)
    atg_relu: { parameters: ["pointer", "i32"], result: "void" },
    // atg_relu6(int *, int)
    atg_relu6: { parameters: ["pointer", "i32"], result: "void" },
    // atg_relu6_(int *, int)
    atg_relu6_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_relu_(int *, int)
    atg_relu_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_relu_out(int *, int, int)
    atg_relu_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_remainder(int *, int, int)
    atg_remainder: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_remainder_(int *, int, int)
    atg_remainder_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_remainder_scalar_out(int *, int, int, int)
    atg_remainder_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_remainder_scalar_tensor(int *, int, int)
    atg_remainder_scalar_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_remainder_scalar_tensor_out(int *, int, int, int)
    atg_remainder_scalar_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_remainder_tensor(int *, int, int)
    atg_remainder_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_remainder_tensor_(int *, int, int)
    atg_remainder_tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_remainder_tensor_out(int *, int, int, int)
    atg_remainder_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_renorm(int *, int, int, int, int)
    atg_renorm: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_renorm_(int *, int, int, int, int)
    atg_renorm_: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_renorm_out(int *, int, int, int, int, int)
    atg_renorm_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_repeat(int *, int, int *, int)
    atg_repeat: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_repeat_interleave(int *, int, int, int)
    atg_repeat_interleave: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_repeat_interleave_self_int(int *, int, int, int, int, int, int)
    atg_repeat_interleave_self_int: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_repeat_interleave_self_tensor(int *, int, int, int, int, int, int)
    atg_repeat_interleave_self_tensor: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_repeat_interleave_tensor_out(int *, int, int, int, int)
    atg_repeat_interleave_tensor_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_repeat_out(int *, int, int, int *, int)
    atg_repeat_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_replication_pad1d(int *, int, int *, int)
    atg_replication_pad1d: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_replication_pad1d_backward(int *, int, int, int *, int)
    atg_replication_pad1d_backward: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_replication_pad1d_backward_grad_input(int *, int, int, int, int *, int)
    atg_replication_pad1d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_replication_pad1d_out(int *, int, int, int *, int)
    atg_replication_pad1d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_replication_pad2d(int *, int, int *, int)
    atg_replication_pad2d: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_replication_pad2d_backward(int *, int, int, int *, int)
    atg_replication_pad2d_backward: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_replication_pad2d_backward_grad_input(int *, int, int, int, int *, int)
    atg_replication_pad2d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_replication_pad2d_out(int *, int, int, int *, int)
    atg_replication_pad2d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_replication_pad3d(int *, int, int *, int)
    atg_replication_pad3d: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_replication_pad3d_backward(int *, int, int, int *, int)
    atg_replication_pad3d_backward: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_replication_pad3d_backward_grad_input(int *, int, int, int, int *, int)
    atg_replication_pad3d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_replication_pad3d_out(int *, int, int, int *, int)
    atg_replication_pad3d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_requires_grad_(int *, int, int)
    atg_requires_grad_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_reshape(int *, int, int *, int)
    atg_reshape: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_reshape_as(int *, int, int)
    atg_reshape_as: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_resize(int *, int, int *, int)
    atg_resize: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_resize_(int *, int, int *, int)
    atg_resize_: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_resize_as(int *, int, int)
    atg_resize_as: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_resize_as_(int *, int, int)
    atg_resize_as_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_resize_as_out(int *, int, int, int)
    atg_resize_as_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_resize_as_sparse(int *, int, int)
    atg_resize_as_sparse: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_resize_as_sparse_(int *, int, int)
    atg_resize_as_sparse_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_resize_as_sparse_out(int *, int, int, int)
    atg_resize_as_sparse_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_resize_out(int *, int, int, int *, int)
    atg_resize_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_resolve_conj(int *, int)
    atg_resolve_conj: { parameters: ["pointer", "i32"], result: "void" },
    // atg_resolve_neg(int *, int)
    atg_resolve_neg: { parameters: ["pointer", "i32"], result: "void" },
    // atg_retains_grad(int)
    atg_retains_grad: { parameters: ["i32"], result: "i32" },
    // atg_rnn_relu(int *, int, int, int *, int, int, int, double, int, int, int)
    atg_rnn_relu: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32", "f64", "i32", "i32", "i32"], result: "void" },
    // atg_rnn_relu_cell(int *, int, int, int, int, int, int)
    atg_rnn_relu_cell: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_rnn_relu_data(int *, int, int, int, int *, int, int, int, double, int, int)
    atg_rnn_relu_data: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "i32", "f64", "i32", "i32"], result: "void" },
    // atg_rnn_tanh(int *, int, int, int *, int, int, int, double, int, int, int)
    atg_rnn_tanh: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32", "f64", "i32", "i32", "i32"], result: "void" },
    // atg_rnn_tanh_cell(int *, int, int, int, int, int, int)
    atg_rnn_tanh_cell: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_rnn_tanh_data(int *, int, int, int, int *, int, int, int, double, int, int)
    atg_rnn_tanh_data: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "i32", "f64", "i32", "i32"], result: "void" },
    // atg_roll(int *, int, int *, int, int *, int)
    atg_roll: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_roll_out(int *, int, int, int *, int, int *, int)
    atg_roll_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_rot90(int *, int, int, int *, int)
    atg_rot90: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_rot90_out(int *, int, int, int, int *, int)
    atg_rot90_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_round(int *, int)
    atg_round: { parameters: ["pointer", "i32"], result: "void" },
    // atg_round_(int *, int)
    atg_round_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_round_decimals(int *, int, int)
    atg_round_decimals: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_round_decimals_(int *, int, int)
    atg_round_decimals_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_round_decimals_out(int *, int, int, int)
    atg_round_decimals_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_round_out(int *, int, int)
    atg_round_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_row_indices(int *, int)
    atg_row_indices: { parameters: ["pointer", "i32"], result: "void" },
    // atg_row_indices_copy(int *, int)
    atg_row_indices_copy: { parameters: ["pointer", "i32"], result: "void" },
    // atg_row_indices_copy_out(int *, int, int)
    atg_row_indices_copy_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_row_stack(int *, int *, int)
    atg_row_stack: { parameters: ["pointer", "pointer", "i32"], result: "void" },
    // atg_row_stack_out(int *, int, int *, int)
    atg_row_stack_out: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_rrelu(int *, int, int)
    atg_rrelu: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_rrelu_(int *, int, int)
    atg_rrelu_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_rrelu_with_noise(int *, int, int, int)
    atg_rrelu_with_noise: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_rrelu_with_noise_(int *, int, int, int)
    atg_rrelu_with_noise_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_rrelu_with_noise_backward(int *, int, int, int, int, int, int, int)
    atg_rrelu_with_noise_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_rrelu_with_noise_backward_out(int *, int, int, int, int, int, int, int, int)
    atg_rrelu_with_noise_backward_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_rrelu_with_noise_out(int *, int, int, int, int)
    atg_rrelu_with_noise_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_rsqrt(int *, int)
    atg_rsqrt: { parameters: ["pointer", "i32"], result: "void" },
    // atg_rsqrt_(int *, int)
    atg_rsqrt_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_rsqrt_out(int *, int, int)
    atg_rsqrt_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_rsub(int *, int, int)
    atg_rsub: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_rsub_scalar(int *, int, int)
    atg_rsub_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_rsub_scalar_out(int *, int, int, int)
    atg_rsub_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_rsub_tensor_out(int *, int, int, int)
    atg_rsub_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_scalar_tensor(int *, int, int, int)
    atg_scalar_tensor: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_scalar_tensor_out(int *, int, int)
    atg_scalar_tensor_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_scatter(int *, int, int, int, int)
    atg_scatter: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_scatter_(int *, int, int, int, int)
    atg_scatter_: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_scatter_add(int *, int, int, int, int)
    atg_scatter_add: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_scatter_add_(int *, int, int, int, int)
    atg_scatter_add_: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_scatter_add_out(int *, int, int, int, int, int)
    atg_scatter_add_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_scatter_reduce(int *, int, int, int, int, char *, int)
    atg_scatter_reduce: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_scatter_reduce_(int *, int, int, int, int, char *, int)
    atg_scatter_reduce_: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_scatter_reduce_out(int *, int, int, int, int, int, char *, int)
    atg_scatter_reduce_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_scatter_src_out(int *, int, int, int, int, int)
    atg_scatter_src_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_scatter_value(int *, int, int, int, int)
    atg_scatter_value: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_scatter_value_(int *, int, int, int, int)
    atg_scatter_value_: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_scatter_value_out(int *, int, int, int, int, int)
    atg_scatter_value_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_scatter_value_reduce(int *, int, int, int, int, char *, int)
    atg_scatter_value_reduce: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_scatter_value_reduce_(int *, int, int, int, int, char *, int)
    atg_scatter_value_reduce_: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_scatter_value_reduce_out(int *, int, int, int, int, int, char *, int)
    atg_scatter_value_reduce_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_searchsorted(int *, int, int, int, int, char *, int, int)
    atg_searchsorted: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_searchsorted_scalar(int *, int, int, int, int, char *, int, int)
    atg_searchsorted_scalar: { parameters: ["pointer", "i32", "i32", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_searchsorted_scalar_out(int *, int, int, int, int, int, char *, int, int)
    atg_searchsorted_scalar_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_searchsorted_tensor_out(int *, int, int, int, int, int, char *, int, int)
    atg_searchsorted_tensor_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_segment_reduce(int *, int, char *, int, int, int, int, int, int, int)
    atg_segment_reduce: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_segment_reduce_out(int *, int, int, char *, int, int, int, int, int, int, int)
    atg_segment_reduce_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_select(int *, int, int, int)
    atg_select: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_select_backward(int *, int, int *, int, int, int)
    atg_select_backward: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_select_backward_out(int *, int, int, int *, int, int, int)
    atg_select_backward_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_select_copy(int *, int, int, int)
    atg_select_copy: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_select_copy_int_out(int *, int, int, int, int)
    atg_select_copy_int_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_select_scatter(int *, int, int, int, int)
    atg_select_scatter: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_select_scatter_out(int *, int, int, int, int, int)
    atg_select_scatter_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_selu(int *, int)
    atg_selu: { parameters: ["pointer", "i32"], result: "void" },
    // atg_selu_(int *, int)
    atg_selu_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_set(int *, int)
    atg_set: { parameters: ["pointer", "i32"], result: "void" },
    // atg_set_(int *, int)
    atg_set_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_set_data(int, int)
    atg_set_data: { parameters: ["i32", "i32"], result: "void" },
    // atg_set_out(int *, int, int)
    atg_set_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_set_requires_grad(int *, int, int)
    atg_set_requires_grad: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_set_source_tensor(int *, int, int)
    atg_set_source_tensor: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_set_source_tensor_(int *, int, int)
    atg_set_source_tensor_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_set_source_tensor_out(int *, int, int, int)
    atg_set_source_tensor_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_set_source_tensor_storage_offset_(int *, int, int, int, int *, int, int *, int)
    atg_set_source_tensor_storage_offset_: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_sgn(int *, int)
    atg_sgn: { parameters: ["pointer", "i32"], result: "void" },
    // atg_sgn_(int *, int)
    atg_sgn_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_sgn_out(int *, int, int)
    atg_sgn_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_sigmoid(int *, int)
    atg_sigmoid: { parameters: ["pointer", "i32"], result: "void" },
    // atg_sigmoid_(int *, int)
    atg_sigmoid_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_sigmoid_backward(int *, int, int)
    atg_sigmoid_backward: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_sigmoid_backward_grad_input(int *, int, int, int)
    atg_sigmoid_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_sigmoid_out(int *, int, int)
    atg_sigmoid_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_sign(int *, int)
    atg_sign: { parameters: ["pointer", "i32"], result: "void" },
    // atg_sign_(int *, int)
    atg_sign_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_sign_out(int *, int, int)
    atg_sign_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_signbit(int *, int)
    atg_signbit: { parameters: ["pointer", "i32"], result: "void" },
    // atg_signbit_out(int *, int, int)
    atg_signbit_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_silu(int *, int)
    atg_silu: { parameters: ["pointer", "i32"], result: "void" },
    // atg_silu_(int *, int)
    atg_silu_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_silu_backward(int *, int, int)
    atg_silu_backward: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_silu_backward_grad_input(int *, int, int, int)
    atg_silu_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_silu_out(int *, int, int)
    atg_silu_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_sin(int *, int)
    atg_sin: { parameters: ["pointer", "i32"], result: "void" },
    // atg_sin_(int *, int)
    atg_sin_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_sin_out(int *, int, int)
    atg_sin_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_sinc(int *, int)
    atg_sinc: { parameters: ["pointer", "i32"], result: "void" },
    // atg_sinc_(int *, int)
    atg_sinc_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_sinc_out(int *, int, int)
    atg_sinc_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_sinh(int *, int)
    atg_sinh: { parameters: ["pointer", "i32"], result: "void" },
    // atg_sinh_(int *, int)
    atg_sinh_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_sinh_out(int *, int, int)
    atg_sinh_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_slice(int *, int, int, int, int, int, int, int)
    atg_slice: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_slice_backward(int *, int, int *, int, int, int, int, int)
    atg_slice_backward: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_slice_backward_out(int *, int, int, int *, int, int, int, int, int)
    atg_slice_backward_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_slice_copy(int *, int, int, int, int, int, int, int)
    atg_slice_copy: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_slice_copy_tensor_out(int *, int, int, int, int, int, int, int, int)
    atg_slice_copy_tensor_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_slice_scatter(int *, int, int, int, int, int, int, int, int)
    atg_slice_scatter: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_slice_scatter_out(int *, int, int, int, int, int, int, int, int, int)
    atg_slice_scatter_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_slogdet(int *, int)
    atg_slogdet: { parameters: ["pointer", "i32"], result: "void" },
    // atg_slogdet_out(int *, int, int, int)
    atg_slogdet_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_slow_conv3d(int *, int, int, int *, int, int, int *, int, int *, int)
    atg_slow_conv3d: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_slow_conv3d_out(int *, int, int, int, int *, int, int, int *, int, int *, int)
    atg_slow_conv3d_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_slow_conv_dilated2d(int *, int, int, int *, int, int, int *, int, int *, int, int *, int)
    atg_slow_conv_dilated2d: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_slow_conv_dilated2d_out(int *, int, int, int, int *, int, int, int *, int, int *, int, int *, int)
    atg_slow_conv_dilated2d_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_slow_conv_dilated3d(int *, int, int, int *, int, int, int *, int, int *, int, int *, int)
    atg_slow_conv_dilated3d: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_slow_conv_dilated3d_out(int *, int, int, int, int *, int, int, int *, int, int *, int, int *, int)
    atg_slow_conv_dilated3d_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_slow_conv_transpose2d(int *, int, int, int *, int, int, int *, int, int *, int, int *, int, int *, int)
    atg_slow_conv_transpose2d: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_slow_conv_transpose2d_out(int *, int, int, int, int *, int, int, int *, int, int *, int, int *, int, int *, int)
    atg_slow_conv_transpose2d_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_slow_conv_transpose3d(int *, int, int, int *, int, int, int *, int, int *, int, int *, int, int *, int)
    atg_slow_conv_transpose3d: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_slow_conv_transpose3d_out(int *, int, int, int, int *, int, int, int *, int, int *, int, int *, int, int *, int)
    atg_slow_conv_transpose3d_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_smm(int *, int, int)
    atg_smm: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_smooth_l1_loss(int *, int, int, int, double)
    atg_smooth_l1_loss: { parameters: ["pointer", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_smooth_l1_loss_backward(int *, int, int, int, int, double)
    atg_smooth_l1_loss_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_smooth_l1_loss_backward_grad_input(int *, int, int, int, int, int, double)
    atg_smooth_l1_loss_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_smooth_l1_loss_out(int *, int, int, int, int, double)
    atg_smooth_l1_loss_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "f64"], result: "void" },
    // atg_soft_margin_loss(int *, int, int, int)
    atg_soft_margin_loss: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_soft_margin_loss_backward(int *, int, int, int, int)
    atg_soft_margin_loss_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_soft_margin_loss_backward_grad_input(int *, int, int, int, int, int)
    atg_soft_margin_loss_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_soft_margin_loss_out(int *, int, int, int, int)
    atg_soft_margin_loss_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_softmax(int *, int, int, int)
    atg_softmax: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_softmax_int_out(int *, int, int, int, int)
    atg_softmax_int_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_softplus(int *, int)
    atg_softplus: { parameters: ["pointer", "i32"], result: "void" },
    // atg_softplus_backward(int *, int, int, int, int)
    atg_softplus_backward: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_softplus_backward_grad_input(int *, int, int, int, int, int)
    atg_softplus_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_softplus_out(int *, int, int)
    atg_softplus_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_softshrink(int *, int)
    atg_softshrink: { parameters: ["pointer", "i32"], result: "void" },
    // atg_softshrink_backward(int *, int, int, int)
    atg_softshrink_backward: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_softshrink_backward_grad_input(int *, int, int, int, int)
    atg_softshrink_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_softshrink_out(int *, int, int)
    atg_softshrink_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_sort(int *, int, int, int)
    atg_sort: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_sort_stable(int *, int, int, int, int)
    atg_sort_stable: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_sort_values(int *, int, int, int, int, int)
    atg_sort_values: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_sort_values_stable(int *, int, int, int, int, int, int)
    atg_sort_values_stable: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_sparse_bsc_tensor(int *, int, int, int, int, int)
    atg_sparse_bsc_tensor: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_sparse_bsc_tensor_ccol_row_value_size(int *, int, int, int, int *, int, int, int)
    atg_sparse_bsc_tensor_ccol_row_value_size: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_sparse_bsr_tensor(int *, int, int, int, int, int)
    atg_sparse_bsr_tensor: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_sparse_bsr_tensor_crow_col_value_size(int *, int, int, int, int *, int, int, int)
    atg_sparse_bsr_tensor_crow_col_value_size: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_sparse_compressed_tensor(int *, int, int, int, int, int)
    atg_sparse_compressed_tensor: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_sparse_compressed_tensor_comp_plain_value_size(int *, int, int, int, int *, int, int, int)
    atg_sparse_compressed_tensor_comp_plain_value_size: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_sparse_coo_tensor(int *, int *, int, int, int)
    atg_sparse_coo_tensor: { parameters: ["pointer", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_sparse_coo_tensor_indices(int *, int, int, int, int)
    atg_sparse_coo_tensor_indices: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_sparse_coo_tensor_indices_size(int *, int, int, int *, int, int, int)
    atg_sparse_coo_tensor_indices_size: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_sparse_coo_tensor_size_out(int *, int, int *, int)
    atg_sparse_coo_tensor_size_out: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_sparse_csc_tensor(int *, int, int, int, int, int)
    atg_sparse_csc_tensor: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_sparse_csc_tensor_ccol_row_value_size(int *, int, int, int, int *, int, int, int)
    atg_sparse_csc_tensor_ccol_row_value_size: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_sparse_csr_tensor(int *, int, int, int, int, int)
    atg_sparse_csr_tensor: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_sparse_csr_tensor_crow_col_value_size(int *, int, int, int, int *, int, int, int)
    atg_sparse_csr_tensor_crow_col_value_size: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_sparse_dim(int)
    atg_sparse_dim: { parameters: ["i32"], result: "i32" },
    // atg_sparse_mask(int *, int, int)
    atg_sparse_mask: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_sparse_mask_out(int *, int, int, int)
    atg_sparse_mask_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_sparse_resize(int *, int, int *, int, int, int)
    atg_sparse_resize: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_sparse_resize_(int *, int, int *, int, int, int)
    atg_sparse_resize_: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_sparse_resize_and_clear(int *, int, int *, int, int, int)
    atg_sparse_resize_and_clear: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_sparse_resize_and_clear_(int *, int, int *, int, int, int)
    atg_sparse_resize_and_clear_: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_sparse_resize_and_clear_out(int *, int, int, int *, int, int, int)
    atg_sparse_resize_and_clear_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_sparse_resize_out(int *, int, int, int *, int, int, int)
    atg_sparse_resize_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_sparse_sampled_addmm(int *, int, int, int)
    atg_sparse_sampled_addmm: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_sparse_sampled_addmm_out(int *, int, int, int, int)
    atg_sparse_sampled_addmm_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_special_airy_ai(int *, int)
    atg_special_airy_ai: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_airy_ai_out(int *, int, int)
    atg_special_airy_ai_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_bessel_j0(int *, int)
    atg_special_bessel_j0: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_bessel_j0_out(int *, int, int)
    atg_special_bessel_j0_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_bessel_j1(int *, int)
    atg_special_bessel_j1: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_bessel_j1_out(int *, int, int)
    atg_special_bessel_j1_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_bessel_y0(int *, int)
    atg_special_bessel_y0: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_bessel_y0_out(int *, int, int)
    atg_special_bessel_y0_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_bessel_y1(int *, int)
    atg_special_bessel_y1: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_bessel_y1_out(int *, int, int)
    atg_special_bessel_y1_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_t(int *, int, int)
    atg_special_chebyshev_polynomial_t: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_t_n_scalar(int *, int, int)
    atg_special_chebyshev_polynomial_t_n_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_t_n_scalar_out(int *, int, int, int)
    atg_special_chebyshev_polynomial_t_n_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_t_out(int *, int, int, int)
    atg_special_chebyshev_polynomial_t_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_t_x_scalar(int *, int, int)
    atg_special_chebyshev_polynomial_t_x_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_t_x_scalar_out(int *, int, int, int)
    atg_special_chebyshev_polynomial_t_x_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_u(int *, int, int)
    atg_special_chebyshev_polynomial_u: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_u_n_scalar(int *, int, int)
    atg_special_chebyshev_polynomial_u_n_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_u_n_scalar_out(int *, int, int, int)
    atg_special_chebyshev_polynomial_u_n_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_u_out(int *, int, int, int)
    atg_special_chebyshev_polynomial_u_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_u_x_scalar(int *, int, int)
    atg_special_chebyshev_polynomial_u_x_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_u_x_scalar_out(int *, int, int, int)
    atg_special_chebyshev_polynomial_u_x_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_v(int *, int, int)
    atg_special_chebyshev_polynomial_v: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_v_n_scalar(int *, int, int)
    atg_special_chebyshev_polynomial_v_n_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_v_n_scalar_out(int *, int, int, int)
    atg_special_chebyshev_polynomial_v_n_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_v_out(int *, int, int, int)
    atg_special_chebyshev_polynomial_v_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_v_x_scalar(int *, int, int)
    atg_special_chebyshev_polynomial_v_x_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_v_x_scalar_out(int *, int, int, int)
    atg_special_chebyshev_polynomial_v_x_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_w(int *, int, int)
    atg_special_chebyshev_polynomial_w: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_w_n_scalar(int *, int, int)
    atg_special_chebyshev_polynomial_w_n_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_w_n_scalar_out(int *, int, int, int)
    atg_special_chebyshev_polynomial_w_n_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_w_out(int *, int, int, int)
    atg_special_chebyshev_polynomial_w_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_w_x_scalar(int *, int, int)
    atg_special_chebyshev_polynomial_w_x_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_chebyshev_polynomial_w_x_scalar_out(int *, int, int, int)
    atg_special_chebyshev_polynomial_w_x_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_digamma(int *, int)
    atg_special_digamma: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_digamma_out(int *, int, int)
    atg_special_digamma_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_entr(int *, int)
    atg_special_entr: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_entr_out(int *, int, int)
    atg_special_entr_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_erf(int *, int)
    atg_special_erf: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_erf_out(int *, int, int)
    atg_special_erf_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_erfc(int *, int)
    atg_special_erfc: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_erfc_out(int *, int, int)
    atg_special_erfc_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_erfcx(int *, int)
    atg_special_erfcx: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_erfcx_out(int *, int, int)
    atg_special_erfcx_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_erfinv(int *, int)
    atg_special_erfinv: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_erfinv_out(int *, int, int)
    atg_special_erfinv_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_exp2(int *, int)
    atg_special_exp2: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_exp2_out(int *, int, int)
    atg_special_exp2_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_expit(int *, int)
    atg_special_expit: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_expit_out(int *, int, int)
    atg_special_expit_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_expm1(int *, int)
    atg_special_expm1: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_expm1_out(int *, int, int)
    atg_special_expm1_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_gammainc(int *, int, int)
    atg_special_gammainc: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_gammainc_out(int *, int, int, int)
    atg_special_gammainc_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_gammaincc(int *, int, int)
    atg_special_gammaincc: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_gammaincc_out(int *, int, int, int)
    atg_special_gammaincc_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_gammaln(int *, int)
    atg_special_gammaln: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_gammaln_out(int *, int, int)
    atg_special_gammaln_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_hermite_polynomial_h(int *, int, int)
    atg_special_hermite_polynomial_h: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_hermite_polynomial_h_n_scalar(int *, int, int)
    atg_special_hermite_polynomial_h_n_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_hermite_polynomial_h_n_scalar_out(int *, int, int, int)
    atg_special_hermite_polynomial_h_n_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_hermite_polynomial_h_out(int *, int, int, int)
    atg_special_hermite_polynomial_h_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_hermite_polynomial_h_x_scalar(int *, int, int)
    atg_special_hermite_polynomial_h_x_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_hermite_polynomial_h_x_scalar_out(int *, int, int, int)
    atg_special_hermite_polynomial_h_x_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_hermite_polynomial_he(int *, int, int)
    atg_special_hermite_polynomial_he: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_hermite_polynomial_he_n_scalar(int *, int, int)
    atg_special_hermite_polynomial_he_n_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_hermite_polynomial_he_n_scalar_out(int *, int, int, int)
    atg_special_hermite_polynomial_he_n_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_hermite_polynomial_he_out(int *, int, int, int)
    atg_special_hermite_polynomial_he_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_hermite_polynomial_he_x_scalar(int *, int, int)
    atg_special_hermite_polynomial_he_x_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_hermite_polynomial_he_x_scalar_out(int *, int, int, int)
    atg_special_hermite_polynomial_he_x_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_i0(int *, int)
    atg_special_i0: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_i0_out(int *, int, int)
    atg_special_i0_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_i0e(int *, int)
    atg_special_i0e: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_i0e_out(int *, int, int)
    atg_special_i0e_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_i1(int *, int)
    atg_special_i1: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_i1_out(int *, int, int)
    atg_special_i1_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_i1e(int *, int)
    atg_special_i1e: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_i1e_out(int *, int, int)
    atg_special_i1e_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_laguerre_polynomial_l(int *, int, int)
    atg_special_laguerre_polynomial_l: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_laguerre_polynomial_l_n_scalar(int *, int, int)
    atg_special_laguerre_polynomial_l_n_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_laguerre_polynomial_l_n_scalar_out(int *, int, int, int)
    atg_special_laguerre_polynomial_l_n_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_laguerre_polynomial_l_out(int *, int, int, int)
    atg_special_laguerre_polynomial_l_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_laguerre_polynomial_l_x_scalar(int *, int, int)
    atg_special_laguerre_polynomial_l_x_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_laguerre_polynomial_l_x_scalar_out(int *, int, int, int)
    atg_special_laguerre_polynomial_l_x_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_legendre_polynomial_p(int *, int, int)
    atg_special_legendre_polynomial_p: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_legendre_polynomial_p_n_scalar(int *, int, int)
    atg_special_legendre_polynomial_p_n_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_legendre_polynomial_p_n_scalar_out(int *, int, int, int)
    atg_special_legendre_polynomial_p_n_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_legendre_polynomial_p_out(int *, int, int, int)
    atg_special_legendre_polynomial_p_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_legendre_polynomial_p_x_scalar(int *, int, int)
    atg_special_legendre_polynomial_p_x_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_legendre_polynomial_p_x_scalar_out(int *, int, int, int)
    atg_special_legendre_polynomial_p_x_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_log1p(int *, int)
    atg_special_log1p: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_log1p_out(int *, int, int)
    atg_special_log1p_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_log_ndtr(int *, int)
    atg_special_log_ndtr: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_log_ndtr_out(int *, int, int)
    atg_special_log_ndtr_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_log_softmax(int *, int, int, int)
    atg_special_log_softmax: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_logit(int *, int, double, int)
    atg_special_logit: { parameters: ["pointer", "i32", "f64", "i32"], result: "void" },
    // atg_special_logit_out(int *, int, int, double, int)
    atg_special_logit_out: { parameters: ["pointer", "i32", "i32", "f64", "i32"], result: "void" },
    // atg_special_logsumexp(int *, int, int *, int, int)
    atg_special_logsumexp: { parameters: ["pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_special_logsumexp_out(int *, int, int, int *, int, int)
    atg_special_logsumexp_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_special_modified_bessel_i0(int *, int)
    atg_special_modified_bessel_i0: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_modified_bessel_i0_out(int *, int, int)
    atg_special_modified_bessel_i0_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_modified_bessel_i1(int *, int)
    atg_special_modified_bessel_i1: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_modified_bessel_i1_out(int *, int, int)
    atg_special_modified_bessel_i1_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_modified_bessel_k0(int *, int)
    atg_special_modified_bessel_k0: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_modified_bessel_k0_out(int *, int, int)
    atg_special_modified_bessel_k0_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_modified_bessel_k1(int *, int)
    atg_special_modified_bessel_k1: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_modified_bessel_k1_out(int *, int, int)
    atg_special_modified_bessel_k1_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_multigammaln(int *, int, int)
    atg_special_multigammaln: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_multigammaln_out(int *, int, int, int)
    atg_special_multigammaln_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_ndtr(int *, int)
    atg_special_ndtr: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_ndtr_out(int *, int, int)
    atg_special_ndtr_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_ndtri(int *, int)
    atg_special_ndtri: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_ndtri_out(int *, int, int)
    atg_special_ndtri_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_polygamma(int *, int, int)
    atg_special_polygamma: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_polygamma_out(int *, int, int, int)
    atg_special_polygamma_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_psi(int *, int)
    atg_special_psi: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_psi_out(int *, int, int)
    atg_special_psi_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_round(int *, int, int)
    atg_special_round: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_round_out(int *, int, int, int)
    atg_special_round_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_scaled_modified_bessel_k0(int *, int)
    atg_special_scaled_modified_bessel_k0: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_scaled_modified_bessel_k0_out(int *, int, int)
    atg_special_scaled_modified_bessel_k0_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_scaled_modified_bessel_k1(int *, int)
    atg_special_scaled_modified_bessel_k1: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_scaled_modified_bessel_k1_out(int *, int, int)
    atg_special_scaled_modified_bessel_k1_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_t(int *, int, int)
    atg_special_shifted_chebyshev_polynomial_t: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_t_n_scalar(int *, int, int)
    atg_special_shifted_chebyshev_polynomial_t_n_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_t_n_scalar_out(int *, int, int, int)
    atg_special_shifted_chebyshev_polynomial_t_n_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_t_out(int *, int, int, int)
    atg_special_shifted_chebyshev_polynomial_t_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_t_x_scalar(int *, int, int)
    atg_special_shifted_chebyshev_polynomial_t_x_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_t_x_scalar_out(int *, int, int, int)
    atg_special_shifted_chebyshev_polynomial_t_x_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_u(int *, int, int)
    atg_special_shifted_chebyshev_polynomial_u: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_u_n_scalar(int *, int, int)
    atg_special_shifted_chebyshev_polynomial_u_n_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_u_n_scalar_out(int *, int, int, int)
    atg_special_shifted_chebyshev_polynomial_u_n_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_u_out(int *, int, int, int)
    atg_special_shifted_chebyshev_polynomial_u_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_u_x_scalar(int *, int, int)
    atg_special_shifted_chebyshev_polynomial_u_x_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_u_x_scalar_out(int *, int, int, int)
    atg_special_shifted_chebyshev_polynomial_u_x_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_v(int *, int, int)
    atg_special_shifted_chebyshev_polynomial_v: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_v_n_scalar(int *, int, int)
    atg_special_shifted_chebyshev_polynomial_v_n_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_v_n_scalar_out(int *, int, int, int)
    atg_special_shifted_chebyshev_polynomial_v_n_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_v_out(int *, int, int, int)
    atg_special_shifted_chebyshev_polynomial_v_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_v_x_scalar(int *, int, int)
    atg_special_shifted_chebyshev_polynomial_v_x_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_v_x_scalar_out(int *, int, int, int)
    atg_special_shifted_chebyshev_polynomial_v_x_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_w(int *, int, int)
    atg_special_shifted_chebyshev_polynomial_w: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_w_n_scalar(int *, int, int)
    atg_special_shifted_chebyshev_polynomial_w_n_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_w_n_scalar_out(int *, int, int, int)
    atg_special_shifted_chebyshev_polynomial_w_n_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_w_out(int *, int, int, int)
    atg_special_shifted_chebyshev_polynomial_w_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_w_x_scalar(int *, int, int)
    atg_special_shifted_chebyshev_polynomial_w_x_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_shifted_chebyshev_polynomial_w_x_scalar_out(int *, int, int, int)
    atg_special_shifted_chebyshev_polynomial_w_x_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_sinc(int *, int)
    atg_special_sinc: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_sinc_out(int *, int, int)
    atg_special_sinc_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_softmax(int *, int, int, int)
    atg_special_softmax: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_spherical_bessel_j0(int *, int)
    atg_special_spherical_bessel_j0: { parameters: ["pointer", "i32"], result: "void" },
    // atg_special_spherical_bessel_j0_out(int *, int, int)
    atg_special_spherical_bessel_j0_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_xlog1py(int *, int, int)
    atg_special_xlog1py: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_xlog1py_other_scalar(int *, int, int)
    atg_special_xlog1py_other_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_xlog1py_other_scalar_out(int *, int, int, int)
    atg_special_xlog1py_other_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_xlog1py_out(int *, int, int, int)
    atg_special_xlog1py_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_xlog1py_self_scalar(int *, int, int)
    atg_special_xlog1py_self_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_xlog1py_self_scalar_out(int *, int, int, int)
    atg_special_xlog1py_self_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_xlogy(int *, int, int)
    atg_special_xlogy: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_xlogy_other_scalar(int *, int, int)
    atg_special_xlogy_other_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_xlogy_other_scalar_out(int *, int, int, int)
    atg_special_xlogy_other_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_xlogy_out(int *, int, int, int)
    atg_special_xlogy_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_xlogy_self_scalar(int *, int, int)
    atg_special_xlogy_self_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_xlogy_self_scalar_out(int *, int, int, int)
    atg_special_xlogy_self_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_zeta(int *, int, int)
    atg_special_zeta: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_zeta_other_scalar(int *, int, int)
    atg_special_zeta_other_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_zeta_other_scalar_out(int *, int, int, int)
    atg_special_zeta_other_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_zeta_out(int *, int, int, int)
    atg_special_zeta_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_special_zeta_self_scalar(int *, int, int)
    atg_special_zeta_self_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_special_zeta_self_scalar_out(int *, int, int, int)
    atg_special_zeta_self_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_split(int, int, int)
    atg_split: { parameters: ["i32", "i32", "i32"], result: "pointer" },
    // atg_split_copy(int, int, int)
    atg_split_copy: { parameters: ["i32", "i32", "i32"], result: "pointer" },
    // atg_split_copy_tensor_out(int *, int, int, int, int)
    atg_split_copy_tensor_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_split_sizes(int, int *, int, int)
    atg_split_sizes: { parameters: ["i32", "pointer", "i32", "i32"], result: "pointer" },
    // atg_split_with_sizes(int, int *, int, int)
    atg_split_with_sizes: { parameters: ["i32", "pointer", "i32", "i32"], result: "pointer" },
    // atg_split_with_sizes_copy(int, int *, int, int)
    atg_split_with_sizes_copy: { parameters: ["i32", "pointer", "i32", "i32"], result: "pointer" },
    // atg_split_with_sizes_copy_out(int *, int, int, int *, int, int)
    atg_split_with_sizes_copy_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_sqrt(int *, int)
    atg_sqrt: { parameters: ["pointer", "i32"], result: "void" },
    // atg_sqrt_(int *, int)
    atg_sqrt_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_sqrt_out(int *, int, int)
    atg_sqrt_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_square(int *, int)
    atg_square: { parameters: ["pointer", "i32"], result: "void" },
    // atg_square_(int *, int)
    atg_square_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_square_out(int *, int, int)
    atg_square_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_squeeze(int *, int)
    atg_squeeze: { parameters: ["pointer", "i32"], result: "void" },
    // atg_squeeze_(int *, int)
    atg_squeeze_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_squeeze_copy(int *, int)
    atg_squeeze_copy: { parameters: ["pointer", "i32"], result: "void" },
    // atg_squeeze_copy_dim(int *, int, int)
    atg_squeeze_copy_dim: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_squeeze_copy_dim_out(int *, int, int, int)
    atg_squeeze_copy_dim_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_squeeze_copy_out(int *, int, int)
    atg_squeeze_copy_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_squeeze_dim(int *, int, int)
    atg_squeeze_dim: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_squeeze_dim_(int *, int, int)
    atg_squeeze_dim_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_sspaddmm(int *, int, int, int)
    atg_sspaddmm: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_sspaddmm_out(int *, int, int, int, int)
    atg_sspaddmm_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_stack(int *, int *, int, int)
    atg_stack: { parameters: ["pointer", "pointer", "i32", "i32"], result: "void" },
    // atg_stack_out(int *, int, int *, int, int)
    atg_stack_out: { parameters: ["pointer", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_std(int *, int, int)
    atg_std: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_std_correction(int *, int, int *, int, int, int, int)
    atg_std_correction: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_std_correction_out(int *, int, int, int *, int, int, int, int)
    atg_std_correction_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_std_dim(int *, int, int *, int, int, int)
    atg_std_dim: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_std_mean(int *, int, int)
    atg_std_mean: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_std_mean_correction(int *, int, int *, int, int, int, int)
    atg_std_mean_correction: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_std_mean_correction_out(int *, int, int, int, int *, int, int, int, int)
    atg_std_mean_correction_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_std_mean_dim(int *, int, int *, int, int, int)
    atg_std_mean_dim: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_std_out(int *, int, int, int *, int, int, int)
    atg_std_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_stft(int *, int, int, int, int, int, int, int, int, int, int)
    atg_stft: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_stft_center(int *, int, int, int, int, int, int, int, int, char *, int, int, int, int)
    atg_stft_center: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_sub(int *, int, int)
    atg_sub: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_sub_(int *, int, int)
    atg_sub_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_sub_out(int *, int, int, int)
    atg_sub_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_sub_scalar(int *, int, int)
    atg_sub_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_sub_scalar_(int *, int, int)
    atg_sub_scalar_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_sub_scalar_out(int *, int, int, int)
    atg_sub_scalar_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_subtract(int *, int, int)
    atg_subtract: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_subtract_(int *, int, int)
    atg_subtract_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_subtract_out(int *, int, int, int)
    atg_subtract_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_subtract_scalar(int *, int, int)
    atg_subtract_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_subtract_scalar_(int *, int, int)
    atg_subtract_scalar_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_sum(int *, int, int)
    atg_sum: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_sum_dim_intlist(int *, int, int *, int, int, int)
    atg_sum_dim_intlist: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_sum_intlist_out(int *, int, int, int *, int, int, int)
    atg_sum_intlist_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_sum_out(int *, int, int, int)
    atg_sum_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_sum_to_size(int *, int, int *, int)
    atg_sum_to_size: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_svd(int *, int, int, int)
    atg_svd: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_svd_u(int *, int, int, int, int, int, int)
    atg_svd_u: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_swapaxes(int *, int, int, int)
    atg_swapaxes: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_swapaxes_(int *, int, int, int)
    atg_swapaxes_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_swapdims(int *, int, int, int)
    atg_swapdims: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_swapdims_(int *, int, int, int)
    atg_swapdims_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_symeig(int *, int, int, int)
    atg_symeig: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_symeig_e(int *, int, int, int, int, int)
    atg_symeig_e: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_t(int *, int)
    atg_t: { parameters: ["pointer", "i32"], result: "void" },
    // atg_t_(int *, int)
    atg_t_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_t_copy(int *, int)
    atg_t_copy: { parameters: ["pointer", "i32"], result: "void" },
    // atg_t_copy_out(int *, int, int)
    atg_t_copy_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_take(int *, int, int)
    atg_take: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_take_along_dim(int *, int, int, int, int)
    atg_take_along_dim: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_take_along_dim_out(int *, int, int, int, int, int)
    atg_take_along_dim_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_take_out(int *, int, int, int)
    atg_take_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_tan(int *, int)
    atg_tan: { parameters: ["pointer", "i32"], result: "void" },
    // atg_tan_(int *, int)
    atg_tan_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_tan_out(int *, int, int)
    atg_tan_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_tanh(int *, int)
    atg_tanh: { parameters: ["pointer", "i32"], result: "void" },
    // atg_tanh_(int *, int)
    atg_tanh_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_tanh_backward(int *, int, int)
    atg_tanh_backward: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_tanh_backward_grad_input(int *, int, int, int)
    atg_tanh_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_tanh_out(int *, int, int)
    atg_tanh_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_tensor_split(int, int, int)
    atg_tensor_split: { parameters: ["i32", "i32", "i32"], result: "pointer" },
    // atg_tensor_split_indices(int, int *, int, int)
    atg_tensor_split_indices: { parameters: ["i32", "pointer", "i32", "i32"], result: "pointer" },
    // atg_tensor_split_tensor_indices_or_sections(int, int, int)
    atg_tensor_split_tensor_indices_or_sections: { parameters: ["i32", "i32", "i32"], result: "pointer" },
    // atg_tensordot(int *, int, int, int *, int, int *, int)
    atg_tensordot: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_tensordot_out(int *, int, int, int, int *, int, int *, int)
    atg_tensordot_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_threshold(int *, int, int, int)
    atg_threshold: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_threshold_(int *, int, int, int)
    atg_threshold_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_threshold_backward(int *, int, int, int)
    atg_threshold_backward: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_threshold_backward_grad_input(int *, int, int, int, int)
    atg_threshold_backward_grad_input: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_threshold_out(int *, int, int, int, int)
    atg_threshold_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_tile(int *, int, int *, int)
    atg_tile: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_to(int *, int, int)
    atg_to: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_to_dense(int *, int, int)
    atg_to_dense: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_to_dense_backward(int *, int, int)
    atg_to_dense_backward: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_to_device(int *, int, int, int, int, int)
    atg_to_device: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_to_dtype(int *, int, int, int, int)
    atg_to_dtype: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_to_dtype_layout(int *, int, int, int, int, int)
    atg_to_dtype_layout: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_to_mkldnn(int *, int, int)
    atg_to_mkldnn: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_to_mkldnn_backward(int *, int, int)
    atg_to_mkldnn_backward: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_to_mkldnn_out(int *, int, int, int)
    atg_to_mkldnn_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_to_other(int *, int, int, int, int)
    atg_to_other: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_to_padded_tensor(int *, int, double, int *, int)
    atg_to_padded_tensor: { parameters: ["pointer", "i32", "f64", "pointer", "i32"], result: "void" },
    // atg_to_padded_tensor_out(int *, int, int, double, int *, int)
    atg_to_padded_tensor_out: { parameters: ["pointer", "i32", "i32", "f64", "pointer", "i32"], result: "void" },
    // atg_to_sparse(int *, int)
    atg_to_sparse: { parameters: ["pointer", "i32"], result: "void" },
    // atg_to_sparse_bsc(int *, int, int *, int)
    atg_to_sparse_bsc: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_to_sparse_bsc_out(int *, int, int, int *, int)
    atg_to_sparse_bsc_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_to_sparse_bsr(int *, int, int *, int)
    atg_to_sparse_bsr: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_to_sparse_bsr_out(int *, int, int, int *, int)
    atg_to_sparse_bsr_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_to_sparse_csc(int *, int)
    atg_to_sparse_csc: { parameters: ["pointer", "i32"], result: "void" },
    // atg_to_sparse_csc_out(int *, int, int)
    atg_to_sparse_csc_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_to_sparse_csr(int *, int)
    atg_to_sparse_csr: { parameters: ["pointer", "i32"], result: "void" },
    // atg_to_sparse_csr_out(int *, int, int)
    atg_to_sparse_csr_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_to_sparse_out(int *, int, int)
    atg_to_sparse_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_to_sparse_sparse_dim(int *, int, int)
    atg_to_sparse_sparse_dim: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_to_sparse_sparse_dim_out(int *, int, int, int)
    atg_to_sparse_sparse_dim_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_topk(int *, int, int, int, int, int)
    atg_topk: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_topk_values(int *, int, int, int, int, int, int, int)
    atg_topk_values: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_totype(int *, int, int)
    atg_totype: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_trace(int *, int)
    atg_trace: { parameters: ["pointer", "i32"], result: "void" },
    // atg_trace_backward(int *, int, int *, int)
    atg_trace_backward: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_trace_out(int *, int, int)
    atg_trace_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_transpose(int *, int, int, int)
    atg_transpose: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_transpose_(int *, int, int, int)
    atg_transpose_: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_transpose_copy(int *, int, int, int)
    atg_transpose_copy: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_transpose_copy_int_out(int *, int, int, int, int)
    atg_transpose_copy_int_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_trapezoid(int *, int, int)
    atg_trapezoid: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_trapezoid_x(int *, int, int, int)
    atg_trapezoid_x: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_trapz(int *, int, int, int)
    atg_trapz: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_trapz_dx(int *, int, double, int)
    atg_trapz_dx: { parameters: ["pointer", "i32", "f64", "i32"], result: "void" },
    // atg_triangular_solve(int *, int, int, int, int, int)
    atg_triangular_solve: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_triangular_solve_x(int *, int, int, int, int, int, int, int)
    atg_triangular_solve_x: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_tril(int *, int, int)
    atg_tril: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_tril_(int *, int, int)
    atg_tril_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_tril_indices(int *, int, int, int, int, int)
    atg_tril_indices: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_tril_indices_out(int *, int, int, int, int)
    atg_tril_indices_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_tril_out(int *, int, int, int)
    atg_tril_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_triplet_margin_loss(int *, int, int, int, double, double, double, int, int)
    atg_triplet_margin_loss: { parameters: ["pointer", "i32", "i32", "i32", "f64", "f64", "f64", "i32", "i32"], result: "void" },
    // atg_triu(int *, int, int)
    atg_triu: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_triu_(int *, int, int)
    atg_triu_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_triu_indices(int *, int, int, int, int, int)
    atg_triu_indices: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_triu_indices_out(int *, int, int, int, int)
    atg_triu_indices_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_triu_out(int *, int, int, int)
    atg_triu_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_true_divide(int *, int, int)
    atg_true_divide: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_true_divide_(int *, int, int)
    atg_true_divide_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_true_divide_out(int *, int, int, int)
    atg_true_divide_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_true_divide_scalar(int *, int, int)
    atg_true_divide_scalar: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_true_divide_scalar_(int *, int, int)
    atg_true_divide_scalar_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_trunc(int *, int)
    atg_trunc: { parameters: ["pointer", "i32"], result: "void" },
    // atg_trunc_(int *, int)
    atg_trunc_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_trunc_out(int *, int, int)
    atg_trunc_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_type_as(int *, int, int)
    atg_type_as: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_unbind(int, int)
    atg_unbind: { parameters: ["i32", "i32"], result: "pointer" },
    // atg_unbind_copy(int, int)
    atg_unbind_copy: { parameters: ["i32", "i32"], result: "pointer" },
    // atg_unbind_copy_int_out(int *, int, int, int)
    atg_unbind_copy_int_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_unflatten(int *, int, int, int *, int)
    atg_unflatten: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_unflatten_dense_tensors(int, int *, int)
    atg_unflatten_dense_tensors: { parameters: ["i32", "pointer", "i32"], result: "pointer" },
    // atg_unfold(int *, int, int, int, int)
    atg_unfold: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_unfold_backward(int *, int, int *, int, int, int, int)
    atg_unfold_backward: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_unfold_backward_out(int *, int, int, int *, int, int, int, int)
    atg_unfold_backward_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_unfold_copy(int *, int, int, int, int)
    atg_unfold_copy: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_unfold_copy_out(int *, int, int, int, int, int)
    atg_unfold_copy_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_uniform(int *, int, double, double)
    atg_uniform: { parameters: ["pointer", "i32", "f64", "f64"], result: "void" },
    // atg_uniform_(int *, int, double, double)
    atg_uniform_: { parameters: ["pointer", "i32", "f64", "f64"], result: "void" },
    // atg_uniform_out(int *, int, int, double, double)
    atg_uniform_out: { parameters: ["pointer", "i32", "i32", "f64", "f64"], result: "void" },
    // atg_unique_consecutive(int *, int, int, int, int, int)
    atg_unique_consecutive: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_unique_consecutive_out(int *, int, int, int, int, int, int, int, int)
    atg_unique_consecutive_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_unique_dim(int *, int, int, int, int, int)
    atg_unique_dim: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_unique_dim_consecutive(int *, int, int, int, int)
    atg_unique_dim_consecutive: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_unique_dim_consecutive_out(int *, int, int, int, int, int, int, int)
    atg_unique_dim_consecutive_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_unique_dim_out(int *, int, int, int, int, int, int, int, int)
    atg_unique_dim_out: { parameters: ["pointer", "i32", "i32", "i32", "i32", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_unsafe_chunk(int, int, int)
    atg_unsafe_chunk: { parameters: ["i32", "i32", "i32"], result: "pointer" },
    // atg_unsafe_split(int, int, int)
    atg_unsafe_split: { parameters: ["i32", "i32", "i32"], result: "pointer" },
    // atg_unsafe_split_tensor_out(int *, int, int, int, int)
    atg_unsafe_split_tensor_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_unsafe_split_with_sizes(int, int *, int, int)
    atg_unsafe_split_with_sizes: { parameters: ["i32", "pointer", "i32", "i32"], result: "pointer" },
    // atg_unsafe_split_with_sizes_out(int *, int, int, int *, int, int)
    atg_unsafe_split_with_sizes_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_unsqueeze(int *, int, int)
    atg_unsqueeze: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_unsqueeze_(int *, int, int)
    atg_unsqueeze_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_unsqueeze_copy(int *, int, int)
    atg_unsqueeze_copy: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_unsqueeze_copy_out(int *, int, int, int)
    atg_unsqueeze_copy_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_upsample_bicubic2d(int *, int, int *, int, int, double, int, double, int)
    atg_upsample_bicubic2d: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_bicubic2d_backward(int *, int, int *, int, int *, int, int, double, int, double, int)
    atg_upsample_bicubic2d_backward: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_bicubic2d_backward_grad_input(int *, int, int, int *, int, int *, int, int, double, int, double, int)
    atg_upsample_bicubic2d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_bicubic2d_backward_vec(int *, int, int *, int, int *, int, int, double *, int)
    atg_upsample_bicubic2d_backward_vec: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_bicubic2d_backward_vec_out(int *, int, int, int *, int, int *, int, int, double *, int)
    atg_upsample_bicubic2d_backward_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_bicubic2d_out(int *, int, int, int *, int, int, double, int, double, int)
    atg_upsample_bicubic2d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_bicubic2d_vec(int *, int, int *, int, int, double *, int)
    atg_upsample_bicubic2d_vec: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_bicubic2d_vec_out(int *, int, int, int *, int, int, double *, int)
    atg_upsample_bicubic2d_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_bilinear2d(int *, int, int *, int, int, double, int, double, int)
    atg_upsample_bilinear2d: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_bilinear2d_backward(int *, int, int *, int, int *, int, int, double, int, double, int)
    atg_upsample_bilinear2d_backward: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_bilinear2d_backward_grad_input(int *, int, int, int *, int, int *, int, int, double, int, double, int)
    atg_upsample_bilinear2d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_bilinear2d_backward_vec(int *, int, int *, int, int *, int, int, double *, int)
    atg_upsample_bilinear2d_backward_vec: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_bilinear2d_backward_vec_out(int *, int, int, int *, int, int *, int, int, double *, int)
    atg_upsample_bilinear2d_backward_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_bilinear2d_out(int *, int, int, int *, int, int, double, int, double, int)
    atg_upsample_bilinear2d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_bilinear2d_vec(int *, int, int *, int, int, double *, int)
    atg_upsample_bilinear2d_vec: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_bilinear2d_vec_out(int *, int, int, int *, int, int, double *, int)
    atg_upsample_bilinear2d_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_linear1d(int *, int, int *, int, int, double, int)
    atg_upsample_linear1d: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_linear1d_backward(int *, int, int *, int, int *, int, int, double, int)
    atg_upsample_linear1d_backward: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_linear1d_backward_grad_input(int *, int, int, int *, int, int *, int, int, double, int)
    atg_upsample_linear1d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_linear1d_backward_vec(int *, int, int *, int, int *, int, int, double *, int)
    atg_upsample_linear1d_backward_vec: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_linear1d_backward_vec_out(int *, int, int, int *, int, int *, int, int, double *, int)
    atg_upsample_linear1d_backward_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_linear1d_out(int *, int, int, int *, int, int, double, int)
    atg_upsample_linear1d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_linear1d_vec(int *, int, int *, int, int, double *, int)
    atg_upsample_linear1d_vec: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_linear1d_vec_out(int *, int, int, int *, int, int, double *, int)
    atg_upsample_linear1d_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_nearest1d(int *, int, int *, int, double, int)
    atg_upsample_nearest1d: { parameters: ["pointer", "i32", "pointer", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_nearest1d_backward(int *, int, int *, int, int *, int, double, int)
    atg_upsample_nearest1d_backward: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_nearest1d_backward_grad_input(int *, int, int, int *, int, int *, int, double, int)
    atg_upsample_nearest1d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_nearest1d_backward_vec(int *, int, int *, int, int *, int, double *, int)
    atg_upsample_nearest1d_backward_vec: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_nearest1d_backward_vec_out(int *, int, int, int *, int, int *, int, double *, int)
    atg_upsample_nearest1d_backward_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_nearest1d_out(int *, int, int, int *, int, double, int)
    atg_upsample_nearest1d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_nearest1d_vec(int *, int, int *, int, double *, int)
    atg_upsample_nearest1d_vec: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_nearest1d_vec_out(int *, int, int, int *, int, double *, int)
    atg_upsample_nearest1d_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_nearest2d(int *, int, int *, int, double, int, double, int)
    atg_upsample_nearest2d: { parameters: ["pointer", "i32", "pointer", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_nearest2d_backward(int *, int, int *, int, int *, int, double, int, double, int)
    atg_upsample_nearest2d_backward: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_nearest2d_backward_grad_input(int *, int, int, int *, int, int *, int, double, int, double, int)
    atg_upsample_nearest2d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_nearest2d_backward_vec(int *, int, int *, int, int *, int, double *, int)
    atg_upsample_nearest2d_backward_vec: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_nearest2d_backward_vec_out(int *, int, int, int *, int, int *, int, double *, int)
    atg_upsample_nearest2d_backward_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_nearest2d_out(int *, int, int, int *, int, double, int, double, int)
    atg_upsample_nearest2d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_nearest2d_vec(int *, int, int *, int, double *, int)
    atg_upsample_nearest2d_vec: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_nearest2d_vec_out(int *, int, int, int *, int, double *, int)
    atg_upsample_nearest2d_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_nearest3d(int *, int, int *, int, double, int, double, int, double, int)
    atg_upsample_nearest3d: { parameters: ["pointer", "i32", "pointer", "i32", "f64", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_nearest3d_backward(int *, int, int *, int, int *, int, double, int, double, int, double, int)
    atg_upsample_nearest3d_backward: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "f64", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_nearest3d_backward_grad_input(int *, int, int, int *, int, int *, int, double, int, double, int, double, int)
    atg_upsample_nearest3d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "f64", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_nearest3d_backward_vec(int *, int, int *, int, int *, int, double *, int)
    atg_upsample_nearest3d_backward_vec: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_nearest3d_backward_vec_out(int *, int, int, int *, int, int *, int, double *, int)
    atg_upsample_nearest3d_backward_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_nearest3d_out(int *, int, int, int *, int, double, int, double, int, double, int)
    atg_upsample_nearest3d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "f64", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_nearest3d_vec(int *, int, int *, int, double *, int)
    atg_upsample_nearest3d_vec: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_nearest3d_vec_out(int *, int, int, int *, int, double *, int)
    atg_upsample_nearest3d_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_trilinear3d(int *, int, int *, int, int, double, int, double, int, double, int)
    atg_upsample_trilinear3d: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "f64", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_trilinear3d_backward(int *, int, int *, int, int *, int, int, double, int, double, int, double, int)
    atg_upsample_trilinear3d_backward: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "f64", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_trilinear3d_backward_grad_input(int *, int, int, int *, int, int *, int, int, double, int, double, int, double, int)
    atg_upsample_trilinear3d_backward_grad_input: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "f64", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_trilinear3d_backward_vec(int *, int, int *, int, int *, int, int, double *, int)
    atg_upsample_trilinear3d_backward_vec: { parameters: ["pointer", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_trilinear3d_backward_vec_out(int *, int, int, int *, int, int *, int, int, double *, int)
    atg_upsample_trilinear3d_backward_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_trilinear3d_out(int *, int, int, int *, int, int, double, int, double, int, double, int)
    atg_upsample_trilinear3d_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "f64", "i32", "f64", "i32", "f64", "i32"], result: "void" },
    // atg_upsample_trilinear3d_vec(int *, int, int *, int, int, double *, int)
    atg_upsample_trilinear3d_vec: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_upsample_trilinear3d_vec_out(int *, int, int, int *, int, int, double *, int)
    atg_upsample_trilinear3d_vec_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_value_selecting_reduction_backward(int *, int, int, int, int *, int, int)
    atg_value_selecting_reduction_backward: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32"], result: "void" },
    // atg_values(int *, int)
    atg_values: { parameters: ["pointer", "i32"], result: "void" },
    // atg_values_copy(int *, int)
    atg_values_copy: { parameters: ["pointer", "i32"], result: "void" },
    // atg_values_copy_out(int *, int, int)
    atg_values_copy_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_vander(int *, int, int, int, int)
    atg_vander: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_var(int *, int, int)
    atg_var: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_var_correction(int *, int, int *, int, int, int, int)
    atg_var_correction: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_var_correction_out(int *, int, int, int *, int, int, int, int)
    atg_var_correction_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_var_dim(int *, int, int *, int, int, int)
    atg_var_dim: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_var_mean(int *, int, int)
    atg_var_mean: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_var_mean_correction(int *, int, int *, int, int, int, int)
    atg_var_mean_correction: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_var_mean_correction_out(int *, int, int, int, int *, int, int, int, int)
    atg_var_mean_correction_out: { parameters: ["pointer", "i32", "i32", "i32", "pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_var_mean_dim(int *, int, int *, int, int, int)
    atg_var_mean_dim: { parameters: ["pointer", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_var_out(int *, int, int, int *, int, int, int)
    atg_var_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_vdot(int *, int, int)
    atg_vdot: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_vdot_out(int *, int, int, int)
    atg_vdot_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_view(int *, int, int *, int)
    atg_view: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_view_as(int *, int, int)
    atg_view_as: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_view_as_complex(int *, int)
    atg_view_as_complex: { parameters: ["pointer", "i32"], result: "void" },
    // atg_view_as_complex_copy(int *, int)
    atg_view_as_complex_copy: { parameters: ["pointer", "i32"], result: "void" },
    // atg_view_as_complex_copy_out(int *, int, int)
    atg_view_as_complex_copy_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_view_as_real(int *, int)
    atg_view_as_real: { parameters: ["pointer", "i32"], result: "void" },
    // atg_view_as_real_copy(int *, int)
    atg_view_as_real_copy: { parameters: ["pointer", "i32"], result: "void" },
    // atg_view_as_real_copy_out(int *, int, int)
    atg_view_as_real_copy_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_view_copy(int *, int, int *, int)
    atg_view_copy: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_view_copy_dtype(int *, int, int)
    atg_view_copy_dtype: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_view_copy_dtype_out(int *, int, int, int)
    atg_view_copy_dtype_out: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_view_copy_out(int *, int, int, int *, int)
    atg_view_copy_out: { parameters: ["pointer", "i32", "i32", "pointer", "i32"], result: "void" },
    // atg_view_dtype(int *, int, int)
    atg_view_dtype: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_vsplit(int, int)
    atg_vsplit: { parameters: ["i32", "i32"], result: "pointer" },
    // atg_vsplit_array(int, int *, int)
    atg_vsplit_array: { parameters: ["i32", "pointer", "i32"], result: "pointer" },
    // atg_vstack(int *, int *, int)
    atg_vstack: { parameters: ["pointer", "pointer", "i32"], result: "void" },
    // atg_vstack_out(int *, int, int *, int)
    atg_vstack_out: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
    // atg_where(int)
    atg_where: { parameters: ["i32"], result: "pointer" },
    // atg_where_scalar(int *, int, int, int)
    atg_where_scalar: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_where_scalarother(int *, int, int, int)
    atg_where_scalarother: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_where_scalarself(int *, int, int, int)
    atg_where_scalarself: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_where_self(int *, int, int, int)
    atg_where_self: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_where_self_out(int *, int, int, int, int)
    atg_where_self_out: { parameters: ["pointer", "i32", "i32", "i32", "i32"], result: "void" },
    // atg_xlogy(int *, int, int)
    atg_xlogy: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_xlogy_(int *, int, int)
    atg_xlogy_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_xlogy_outscalar_other(int *, int, int, int)
    atg_xlogy_outscalar_other: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_xlogy_outscalar_self(int *, int, int, int)
    atg_xlogy_outscalar_self: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_xlogy_outtensor(int *, int, int, int)
    atg_xlogy_outtensor: { parameters: ["pointer", "i32", "i32", "i32"], result: "void" },
    // atg_xlogy_scalar_other(int *, int, int)
    atg_xlogy_scalar_other: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_xlogy_scalar_other_(int *, int, int)
    atg_xlogy_scalar_other_: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_xlogy_scalar_self(int *, int, int)
    atg_xlogy_scalar_self: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_zero(int *, int)
    atg_zero: { parameters: ["pointer", "i32"], result: "void" },
    // atg_zero_(int *, int)
    atg_zero_: { parameters: ["pointer", "i32"], result: "void" },
    // atg_zero_out(int *, int, int)
    atg_zero_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_zeros(int *, int *, int, int, int)
    atg_zeros: { parameters: ["pointer", "pointer", "i32", "i32", "i32"], result: "void" },
    // atg_zeros_like(int *, int)
    atg_zeros_like: { parameters: ["pointer", "i32"], result: "void" },
    // atg_zeros_like_out(int *, int, int)
    atg_zeros_like_out: { parameters: ["pointer", "i32", "i32"], result: "void" },
    // atg_zeros_out(int *, int, int *, int)
    atg_zeros_out: { parameters: ["pointer", "i32", "pointer", "i32"], result: "void" },
  });
}
