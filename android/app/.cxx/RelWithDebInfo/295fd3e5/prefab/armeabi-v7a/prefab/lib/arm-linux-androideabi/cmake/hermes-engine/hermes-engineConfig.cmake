if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/home/joaovictor/.gradle/caches/transforms-3/9a14d01498f3059d6b5f3d84d79d7151/transformed/jetified-hermes-android-0.72.3-release/prefab/modules/libhermes/libs/android.armeabi-v7a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/home/joaovictor/.gradle/caches/transforms-3/9a14d01498f3059d6b5f3d84d79d7151/transformed/jetified-hermes-android-0.72.3-release/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

