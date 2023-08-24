if(NOT TARGET fbjni::fbjni)
add_library(fbjni::fbjni SHARED IMPORTED)
set_target_properties(fbjni::fbjni PROPERTIES
    IMPORTED_LOCATION "/home/joaovictor/.gradle/caches/transforms-3/e1f7cbca3bbe69c693213adee4ac9747/transformed/jetified-fbjni-0.3.0/prefab/modules/fbjni/libs/android.x86/libfbjni.so"
    INTERFACE_INCLUDE_DIRECTORIES "/home/joaovictor/.gradle/caches/transforms-3/e1f7cbca3bbe69c693213adee4ac9747/transformed/jetified-fbjni-0.3.0/prefab/modules/fbjni/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

