if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/home/joaovictor/.gradle/caches/transforms-3/8b89ff19da3b35949678584cb22e4a0e/transformed/jetified-hermes-android-0.72.4-release/prefab/modules/libhermes/libs/android.armeabi-v7a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/home/joaovictor/.gradle/caches/transforms-3/8b89ff19da3b35949678584cb22e4a0e/transformed/jetified-hermes-android-0.72.4-release/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

